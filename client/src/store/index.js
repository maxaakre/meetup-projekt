import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import * as API from "@/api";

// const API = "api/meets";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventList: [],
    eventReviews: [],
    items: [],
    isOpen: false,
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
      sessionStorage.removeItem("meetup");
    },
    setEventData(state, event) {
      const eventExists = state.eventList.some((item) => item.id === event.id);
      if (eventExists) {
        state.eventList = state.eventList.filter((e) => e.id !== event.id);
      } else {
        state.eventList.push(event);
        localStorage.setItem("attended", JSON.stringify(state.eventList));
      }
    },
    setEventArray(state, events) {
      state.eventList = events;
    },
    setEventReview(state, eventReview) {
      state.eventReviews.push(eventReview);
      localStorage.setItem("reviews", JSON.stringify(state.eventReviews));
    },
    setReviewsArray(state, reviews) {
      state.eventReviews = reviews;
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
  getters: {
    showCurrentReview: (state) => (id) => {
      return state.eventReviews.filter((review) => review.id == id);
    },
  },
});
