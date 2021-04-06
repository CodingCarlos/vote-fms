// Inital state
const initialState = {
  freestylers: [],
  format: {
    name: 'FMS 2021',
    modes: [
      {
        name: 'Easy Mode',
        patterns: 9,
      },
    ],
  },
  status: {
    mode: 0,
    freestyler: 0,
    pattern: 0,
  },
};

// Getters
const getters = {};

// Actions
const actions = {
  setFreestylers({ commit }, freestylers) {
    commit('setFreestylers', freestylers);
  },
  nextMode({ commit, state }) {
    const nextMode = state.status.mode + 1;
    commit('setMode', nextMode);
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
};

// Mutations
const mutations = {
  setFreestylers(state, freestylers) {
    state.freestylers = freestylers;
  },
  setMode(state, mode) {
    state.status.mode = mode;
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
