import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import store from "@/store/index.js";
describe("Navbar", () => {
  it("Show if router prop is set with '/newevent' url  when you are loged in", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const $route = {
      path: "/newevent",
      store,
    };

    const wrapper = shallowMount(Navbar, {
      localVue,
      mocks: {
        $route,
        $store: {
          state: { auth: true },
        },
      },
      stubs: ["router-link"],
    });
    expect(wrapper.vm.$route.path).toBe("/newevent");
  });
});
