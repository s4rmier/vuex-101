import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
  namespaced: true, //tells vue that this module is detached from the rest of the store.
  state() {
    return { counter: 0 };
  },

  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
