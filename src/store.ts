import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'FamilyName FirstName',
    categoryInfo: [],
  },
  mutations: {
    updateMessage(state, val) {
      state.message = val;
    },
    categoryInfo(state, val) {
      state.categoryInfo.push(val);
    },
  },
  actions: {
    updateMessage(context) {
      context.commit('updateMessage', 'Updated Message');
    },
    updateCategoryInfo({ commit }, info) {
      commit('categoryInfo', info);
    },
    deleteCategoryInfo({ commit }, info) {
      commit('categoryInfo', info);
    },
  },
});
