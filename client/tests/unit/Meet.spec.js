import Meet from "@/views/Meet.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: [{ title: "Vue Meeting" }] }),
}));

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productItems: [],
  },
  actions: {
    readProducts() {},
  },
});
describe("Meet.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Meet, {
      localVue,
      store,
      stubs: ["router-link"],
    });
  });

  test("return one product name to be Vue Meeting", async () => {
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.items).toEqual([{ title: "Vue Meeting" }]);
    });
  });
});
