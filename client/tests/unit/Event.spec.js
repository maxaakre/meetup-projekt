import { mount } from "@vue/test-utils";
import Event from "@/views/Event.vue";

describe("Card.vue", () => {
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
