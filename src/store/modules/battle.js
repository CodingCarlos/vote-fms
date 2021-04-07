import { firestoreAction } from 'vuexfire';

import { db } from '@/firebase';

// Inital state
const initialState = {
  freestylers: [],
  format: {
    name: 'FMS 2021',
    // ToDo: Añadir todos los modos del formato FMS 2021
    modes: [
      {
        name: 'Easy Mode',
        patterns: 6,
      },
      {
        name: 'Hard Mode',
        patterns: 16,
      },
    ],
  },
  status: {
    mode: 0,
    freestyler: 0,
    pattern: 0,
  },
  votes: [],
};

// Getters
const getters = {
  getVotes: (state) => (mode, freestyler, pattern) => {
    // ToDo: Coger la votación por ID en vez de buscar (formato: MODE_FREESYLER_PATTERN)
    const vote = state.votes.find((item) => {
      if (item.mode === mode && item.freestyler === freestyler && item.pattern === pattern) {
        return true;
      }

      return false;
    });

    return (vote && vote.value) || 0;
  },
};

// Actions
const actions = {
  setFreestylers({ commit }, freestylers) {
    commit('setFreestylers', freestylers);
  },
  nextMode({ commit, state }) {
    const nextMode = state.status.mode + 1;
    commit('setMode', nextMode);
  },
  nextFreestyler({ commit, state }) {
    let nextFreestyler = state.status.freestyler + 1;

    if (nextFreestyler >= state.freestylers.length) {
      nextFreestyler = 0;
    }

    commit('setFreestyler', nextFreestyler);
  },
  setFreestyler({ commit }, freestyler) {
    commit('setFreestyler', freestyler);
  },
  nextPattern({ commit, state }) {
    const currentMode = state.status.mode;
    let nextPattern = state.status.pattern + 1;

    if (nextPattern >= state.format.modes[currentMode].patterns) {
      console.warn('Nos hemos pasado de rosca. Volvemos al cero');
      nextPattern = 0;
    }

    commit('setPattern', nextPattern);
  },
  setPattern({ commit }, pattern) {
    commit('setPattern', pattern);
  },
  setStatus({ commit }, { mode, freestyler, pattern }) {
    if (typeof mode === 'number') {
      commit('setMode', mode);
    }
    if (typeof freestyler === 'number') {
      commit('setFreestyler', freestyler);
    }
    if (typeof pattern === 'number') {
      commit('setPattern', pattern);
    }
  },
  vote({ state }, value) {
    const vote = {
      value,
      mode: state.status.mode,
      freestyler: state.status.freestyler,
      pattern: state.status.pattern,
    };

    // ToDo: Crear una función que genere los ID
    const id = `${vote.mode}_${vote.freestyler}_${vote.pattern}`;
    return db.collection('votes').doc(id).set(vote);
  },
  bindVotes: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('votes', db.collection('votes'))),
};

// Mutations
const mutations = {
  setFreestylers(state, freestylers) {
    state.freestylers = freestylers;
  },
  setMode(state, mode) {
    state.status.mode = mode;
  },
  setFreestyler(state, freestyler) {
    state.status.freestyler = freestyler;
  },
  setPattern(state, pattern) {
    state.status.pattern = pattern;
  },
};

// Export store
export default {
  namespaced: true,
  state: { ...initialState },
  getters,
  actions,
  mutations,
};
