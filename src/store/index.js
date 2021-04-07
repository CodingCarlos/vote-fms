import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';

import battle from './modules/battle';
import freestylers from './modules/freestylers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    battle,
    freestylers,
  },
  mutations: {
    ...vuexfireMutations,
  },
});
