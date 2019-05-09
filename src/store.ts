import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'FamilyName FirstName',
    categoryInfo: [],
  },
  mutations: {
    categoryInfo(state, val) {
      state.categoryInfo.push(val);
    },
  },
  actions: {
    updateCategoryInfo({ commit }, info) {
      commit('categoryInfo', info);
    },
    deleteCategoryInfo({ commit }, info) {
      commit('categoryInfo', info);
    },
  },
});
