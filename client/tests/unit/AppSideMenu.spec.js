import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import AppSideMenu from "@/components/AppSideMenu.vue";

describe("AppSideMenu", () => {
  test("should check if side menu is visible using Vuex", () => {
    const wrapper = shallowMount(AppSideMenu, {
      mocks: {
        Vuex,
        $store: {
          state: { isOpen: true },
        },
      },
      stubs: ["router-link"],
    });

    expect(wrapper.find(".side-menu").exists(true));
  });
  test("should check if side menu is visible using Vuex", () => {
    const wrapper = shallowMount(AppSideMenu, {
      mocks: {
        Vuex,
        $store: {
          state: { isOpen: false },
        },
      },
      stubs: ["router-link"],
    });

    expect(wrapper.find(".side-menu").exists(false));
  });
});
