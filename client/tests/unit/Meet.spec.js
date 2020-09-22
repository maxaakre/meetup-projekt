import Meet from "@/views/Meet.vue";
import { shallowMount } from "@vue/test-utils";
import vuex from "vuex";
jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{ title: "Vue Meeting" }] }),
}));

describe("Meet.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Meet, {
      vuex,
      stubs: ["router-link"],
    });
  });

  test("return one product name to be Vue Meeting", async () => {
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.items).toEqual([{ title: "Vue Meeting" }]);
    });
  });
});
