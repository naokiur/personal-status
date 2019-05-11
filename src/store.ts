import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'FamilyName FirstName',
    categoryInfo: [],
    categoryList: []
  },
  mutations: {
    categoryInfo(state, val) {
      state.categoryInfo.push(val);
    },
    categoryList(state, val) {
      state.categoryList.push(val);
    },
  },
  actions: {
    updateCategoryInfo({ commit }, info) {
      commit('categoryInfo', info);
    },
    deleteCategoryInfo({ commit }, info) {
      commit('categoryInfo', info);
    },
    updateCategoryList({ commit }, info) {
      commit('categoryList', info);
    },
  },
});
