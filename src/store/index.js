import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dummyData: null
    },
    getters: {
      target(state) {
        return state.dummyData.target
      },
      messages(state) {
        return state.dummyData.messages
      },
      labels(state) {
        return state.dummyData.labels
      }
    },
    mutations: {
      getData(state, data) {
          state.dummyData = data;
      }
    },
    actions: {
      setData({ commit }, data) {
        commit('getData', data)
      }
    }
});