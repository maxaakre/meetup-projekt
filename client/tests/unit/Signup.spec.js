import { shallowMount } from "@vue/test-utils";
import Signup from "@/views/Signup.vue";

describe("Signup", () => {
  it("renders a message and responds correctly to user input", () => {
    const wrapper = shallowMount(Signup, {
      data() {
        return {
          message: "Register",
          username: "",
          password: "",
        };
      },
    });

    // update the `username` and assert error is no longer rendered
    wrapper.setData({ username: "Max@gmail.com" });
    expect(wrapper.find("input[type='username']").exists()).toBe(false);
  });
});
