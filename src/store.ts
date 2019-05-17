import Vue from 'vue';
import Vuex from 'vuex';
import Category from '@/models/category/Category';
import CategoryList from './models/category/CategoryList';
import HeadCategoryList from './models/headCategory/HeadCategoryList';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'FamilyName FirstName',
    categoryList: [],
  },
  mutations: {
    categoryList(state, val: CategoryList) {
      state.categoryList = val.getValues();
    },
  },
  actions: {
    updateCategoryList({ commit }, info) {
      commit('categoryList', info);
    },
  },
  getters: {
    getCategoryNames(state) {
      return state.categoryList.map((m: Category) => m.getName());
    },
    getCategoryLevels(state) {
      return state.categoryList.map((m: Category) => m.getLevel());
    },
  },
});
