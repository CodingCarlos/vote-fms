// ESTO HAY QUE BORRARLO
const freestylersListMock = [
  {
    id: '001',
    name: 'Sito Minñaco',
    pic: 'https://picsum.photos/200',
  },
  {
    id: '002',
    name: 'Manolo Lama',
    pic: 'https://picsum.photos/200',
  },
  {
    id: '003',
    name: 'Paco Santos',
    pic: 'https://picsum.photos/200',
  },
  {
    id: '004',
    name: 'John Cena',
    pic: 'https://picsum.photos/200',
  },
  {
    id: '005',
    name: 'Optimus Prime',
    pic: 'https://picsum.photos/200',
  },
];

// Inital state
const initialState = {
  list: [],
};

// Getters
const getters = {};

// Actions
const actions = {
  getFreestylers({ commit }) {
    commit('setFreestylers', freestylersListMock);
  },
};

// Mutations
const mutations = {
  setFreestylers(state, freestylers) {
    console.log('Funciono');
    state.list = freestylers;
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
