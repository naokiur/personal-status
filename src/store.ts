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
    status: [
      {
        id: 'majorItem',
        contents: [
          {
            id: 'minorItem',
            name: '野手',
            contents: [
              {id: 'meat', content: 'A'},
              {id: 'power', content: 'B'},
              {id: 'run', content: 'C'},
              {id: 'shoulder', content: 'D'},
              {id: 'diffence', content: 'E'},
            ],
          },
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
