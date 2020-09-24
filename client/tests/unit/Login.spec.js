import { shallowMount } from "@vue/test-utils";
import Login from "@/components/Login.vue";

describe("Login", () => {
  it("renders a message and responds correctly to user input", () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          message: "Login",
          email: "",
          password: "",
        };
      },
    });

    // see if the message renders
    // expect(wrapper.findAll(".message").length()).toEqual("Login");

    // update the `username` and assert error is no longer rendered
    wrapper.setData({ email: "Max@gmail.com" });
    expect(wrapper.find("input[type='email']").exists()).toBe(false);
  });
  test("sends post request with email on submit", () => {
    const axios = {
      // #A
      post: jest.fn(),
    };
    const wrapper = shallowMount(Login, {
      data() {
        return {
          message: "Login",
          email: "",
          password: "",
        };
      },
      mocks: {
        axios,
      },
    });
    const input = wrapper.find('input[type="email"]'); // #C
    input.setValue("email@gmail.com"); // #D
    wrapper.find(".button").trigger("submit"); // #F
    const url = "http://localhost:8080/api/users/auth";
    const expectedData = expect.objectContaining({
      email: "email@gmail.com",
    });
    expect(axios.post).toHaveBeenCalledWith(url, expectedData); // #G
  });
});
