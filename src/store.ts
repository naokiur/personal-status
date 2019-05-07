import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'FamilyName FirstName',
    // status: [
    //   {
    //     firstA: {
    //       secondA: {
    //         thirdA: {
    //           aaa: 'aaa1',
    //           bbb: 'bbb1',
    //         },
    //       },
    //     },
    //   },
    // ],
    // status: [
    //   1,
    //   2,
    //   3,
    //   4,
    //   5,
    // ],
    // categoryInfo: [],
    categoryInfo: [],
    status: [
      {
        id: 'fielder',
        name: '野手',
        contents: [
          {id: 'meet', level: 5},
          {id: 'power', level: 4},
          {id: 'run', level: 3},
          {id: 'shoulder', level: 2},
          {id: 'diffence', level: 1},
        ],
      },
      {
        id: 'pitcher',
        name: '投手',
        contents: [
          {id: 'speed', level: 5},
          {id: 'controll', level: 2},
          {id: 'stamina', level: 4},
          {id: 'change', level: 5},
          {id: 'diffence', level: 2},
        ],
      },
    ],
    categoryInfoStatus: {
      fielder: {
        name: '野手',
        contents: [
          {id: 'meet', level: 5},
        ],
      },
      pitcher: {
        name: '投手',
        contents: [
          {id: 'diffence', level: 2},
        ],
      },
    },
  },
  mutations: {
    updateMessage(state, val) {
      state.message = val;
    },
    categoryInfo(state, val) {
      // state.categoryInfo.filter(v => v.id === val.id);
      // Vue.set(state.categoryInfo, 0, val)
      state.categoryInfo.push(val);
      // state.categoryInfo = val;
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
