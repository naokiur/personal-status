import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'StoreMessage',
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
    status: [
      {
        id: 'minorItem',
        name: '野手',
        contents: [
          {id: 'meat', level: 5},
          {id: 'power', level: 4},
          {id: 'run', level: 3},
          {id: 'shoulder', level: 2},
          {id: 'diffence', level: 1},
        ],
      },
    ],
  },
  mutations: {
    updateMessage(state, val) {
      state.message = val;
    },
  },
  actions: {
    updateMessage(context) {
      context.commit('updateMessage', 'Updated Message');
    },
  },
});
