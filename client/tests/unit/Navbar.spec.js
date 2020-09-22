import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Navbar", () => {
  test("Show if router prop is set with '/' url ", () => {
    const $route = {
      path: "/",
    };

    const wrapper = mount(Navbar, {
      localVue,
      mocks: {
        $route,
      },
      stubs: ["router-link"],
    });
    expect(wrapper.vm.$route.path).toBe("/");
  });
});
