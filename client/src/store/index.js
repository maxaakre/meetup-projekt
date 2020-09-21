import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import MeetServices from "../api/MeetServices";

const API = "api/meets";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meet: [],
    items: [],
    meetItems: MeetServices.getMeetItems().then((res) => res.data),
  },
  mutations: {
    displayMeets(state, items) {
      state.items = items;
    },
  },
  actions: {
    async getMeetList(context) {
      let resp = await axios.get(API);
      context.commit("displayMeets", resp.data.meet);
      console.log(resp);
    },
  },
  modules: {},
});
