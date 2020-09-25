import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import * as API from "@/api";

// const API = "api/meets";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    isOpen: false,
    cartModalOpen: false,
    showModal: false,
    auth: {
      loggedIn: false,
      error: false,
      token: null,
      user: {
        role: "anonymous",
      },
    },
  },
  mutations: {
    toggleLogin(state) {
      state.showModal = !state.showModal;
    },
    displayMeets(state, items) {
      state.items = items;
    },
    TOGGLE_SIDE_MENU(state) {
      state.isOpen = !state.isOpen;
    },
    TOGGLE_CART(state) {
      state.cartModalOpen = !state.cartModalOpen;
    },
    auth(state, body) {
      state.auth.user = body.user;
      state.auth.loggedIn = true;

      API.setAuthHeader(body.token);

      const user = body.user;
      const token = body.token;

      // Set session
      sessionStorage.setItem("meetup", JSON.stringify({ user, token }));
    },
    login(state) {
      state.auth.loggedIn = true;
      state.auth.error = false;
    },
    failLogin(state) {
      state.auth.login = false;
      state.auth.error = true;
      API.clearAuthHeader();
    },
    logout(state) {
      state.auth.loggedIn = false;
      state.auth.error = false;
      API.clearAuthHeader();
      state.cart = [];
      state.orderHistory = [];
      sessionStorage.removeItem("sinus");
    },
  },
  actions: {
    async getMeetList(context) {
      let resp = await axios.get(API);
      context.commit("displayMeets", resp.data.meet);
      console.log(resp);
    },
    checkAuth({ commit }) {
      if (sessionStorage.getItem("meetup")) {
        const persistedData = JSON.parse(sessionStorage.getItem("meetup"));
        commit("auth", persistedData);
        console.log("User Authorized");
      } else {
        commit("logout");
        console.log("User Not Authorized");
      }
    },

    register({ commit }, newUser) {
      API.register(newUser)
        .then((user) => {
          commit("auth", user);
          commit("login");
        })
        .catch(console.log);
    },
    login({ commit }, credentials) {
      API.login(credentials)
        .then((tokenData) => {
          commit("auth", tokenData);
        })
        .catch((error) => {
          console.log(error);
          commit("failLogin");
        });
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  modules: {},
});
