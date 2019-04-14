import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'StoreMessage',
  },
  mutations: {
    updateMessage(state, val) {
      state.message = val
    },
  },
  actions: {
    updateMessage(context) {
      context.commit('updateMessage', 'Updated Message');
    },
  },
});
