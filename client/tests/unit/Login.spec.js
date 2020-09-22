import { shallowMount } from "@vue/test-utils";
import Login from "@/views/Login.vue";

describe("Login", () => {
  it("renders a message and responds correctly to user input", () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          message: "Welcome to join meetings and maybe create a event your own",
          username: "",
          password: "",
        };
      },
    });

    // see if the message renders
    expect(wrapper.find(".message").text()).toEqual(
      "Welcome to join meetings and maybe create a event your own"
    );

    // assert the error is rendered
    expect(wrapper.find(".error").exists()).toBeTruthy();

    // update the `username` and assert error is no longer rendered
    wrapper.setData({ username: "Mad Aakre" });
    expect(wrapper.find(".error").exists()).toBe(true);
  });
});
