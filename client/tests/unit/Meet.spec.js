import Meet from "@/components/Meet.vue";
import { shallowMount } from "@vue/test-utils";
jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{ title: "Vue Meeting" }] }),
}));

describe("Meet.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Meet, {
      stubs: ["router-link"],
    });
  });

  test("return one product name to be Vue Meeting", async () => {
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.listItems).toEqual([{ title: "Vue Meeting" }]);
    });
  });
});
