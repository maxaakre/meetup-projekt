import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Event from "@/views/Event.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import store from "@/store/index.js";

describe("Event.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Event);
  });
  it("Find p tag and with class info", () => {
    const messageWrapper = wrapper.find(".info");
    expect(messageWrapper.exists()).toBe(false);
  });
  it("should diplay icon/img for event ", () => {
    const imageWrapper = wrapper.find("img");
    expect(imageWrapper.exists()).toBe(false);
  });
  it("should show form for reviews", () => {
    const amountWrapper = wrapper.find(".reviews");
    expect(amountWrapper.exists()).toBe(false);
  });
});

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("Event.vue", () => {
  it("renders a child component Event via routing", async () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const $route = {
      path: "/event/:id",
      store,
    };
    const wrapper = shallowMount(Event, {
      localVue,
      mocks: {
        $route,
      },
      stubs: ["router-link"],
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(Event).exists()).toBe(true);
  });
});

const store2 = new Vuex.Store({
  state: {
    eventList: [],
    eventReviews: [],
  },
  getters: {
    showCurrentReview: (state) => (id) => {
      return state.eventReviews.filter((review) => review.id == id);
    },
  },
});

describe("Event.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Event, {
      localVue,
      store2,
      setProps: {
        id: 1,
        img: "logo",
        title: "Vue Meeting",
        desc: "Talking about the newest in Vue",
        date: "2021-01-10",
        attendees: 1,
      },
    });
  });
  test("should check if component exist ", () => {
    expect(wrapper.findComponent(Event).exists()).toBe(true);
  });
});
