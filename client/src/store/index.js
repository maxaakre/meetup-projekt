import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const API = "api/meets";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meet: [],
  },
  mutations: {
    displayMeets(state, meet) {
      state.meet = meet;
    },
  },
  actions: {
    async getMeetList(context) {
      let resp = await axios.get(API);
      context.commit("displayMeets", resp.data.meet);
    },
  },
  modules: {},
});
