import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dummyData: null,
        formData: [],
        selectedMessage: null,
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
      },
      formDataTotalLength(state) {
        return state.formData.length
      },
      labeledLength(state) {
        const labelData = state.formData.filter((item) => {
          return item.label !== null
        })
        return labelData.length
      }
    },
    mutations: {
      setData(state, data) {
        state.dummyData = data;
      },
      setFormData(state, data) {
        state.formData = data;
      },
      setSelectedMessage(state, data) {
        state.selectedMessage = data;
      }
    },
    actions: {
      setData({ commit }, data) {
        commit('setData', data)
      },
    }
});