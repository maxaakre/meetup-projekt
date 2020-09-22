import Vuex from "vuex";
import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import VueRouter from "vue-router";

describe("Navbar", () => {
  test("Show if router prop is set with '/' url ", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const $route = {
      path: "/",
    };

    const wrapper = shallowMount(Navbar, {
      localVue,
      mocks: {
        $route,
      },
      stubs: ["router-link"],
    });
    expect(wrapper.vm.$route.path).toBe("/");
  });

  it("should take you to the home from Navbar to Home", async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    const routes = [{ path: "/", name: "Home" }];

    const router = new VueRouter({
      routes,
    });

    const wrapper = shallowMount(Navbar, {
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    await wrapper.findAll(".home-btn").trigger("click", {
      button: 1,
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe("/");
  });
});
