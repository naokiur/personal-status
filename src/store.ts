import Vue from 'vue';
import Vuex from 'vuex';
import Category from '@/models/category/Category';
import CategoryList from './models/category/CategoryList';
import HeadCategoryList from './models/headCategory/HeadCategoryList';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'FamilyName FirstName',
    headCategoryList: [],
    categoryList: [],
  },
  mutations: {
    headCategoryList(state, val: HeadCategoryList) {
      state.headCategoryList = val.getValues();
    },
    categoryList(state, val: CategoryList) {
      state.categoryList = val.getValues();
    },
  },
  actions: {
    updateHeadCategoryList({ commit }, info) {
      commit('headCategoryList', info);
    },
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
