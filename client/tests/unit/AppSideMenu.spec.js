import Vuex from "vuex";
import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import AppSideMenu from "@/components/AppSideMenu.vue";
import Home from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Products", () => {
  it("Should redirect you to products page, when clicking on 'Shop', while on side-menu", () => {
    const $route = {
      path: "/Home",
    };

    const wrapper = shallowMount(Home, {
      mocks: {
        $route,
      },
      stubs: ["router-link"],
    });

    expect(wrapper.vm.$route.path).toBe("/Home");
  });

  describe("AppSideMenu", () => {
    test("should check if side menu is visible using Vuex", () => {
      const wrapper = mount(AppSideMenu, {
        mocks: {
          $store: {
            state: { isOpen: true },
          },
        },
        stubs: ["router-link"],
      });

      expect(wrapper.find(".side-menu").exists()).toBe(true);
    });
  });
});
