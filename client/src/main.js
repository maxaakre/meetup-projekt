import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";

Vue.use(require("vue-moment"), {
  moment,
});

Vue.config.productionTip = false;

new Vue({
  created() {
    const loggedIn = sessionStorage.getItem("meetup");
    const storedAttendees = localStorage.getItem("attended");
    const storedReviews = localStorage.getItem("reviews");
    if (loggedIn) {
      store.commit("auth", JSON.parse(loggedIn));
      store.commit("setEventArray", JSON.parse(storedAttendees));
      store.commit("setReviewsArray", JSON.parse(storedReviews));
    }
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
