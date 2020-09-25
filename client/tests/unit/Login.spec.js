import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Login from "@/components/Login.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showModal: true,
    auth: {
      loggedIn: false,
    },
  },
});

describe("Login.vue", () => {
  let wrapper;
  let credentials;
  beforeEach(() => {
    wrapper = shallowMount(Login, {
      store,
      localVue,
      data() {
        return {
          credentials: {
            email: "max@gmail.com",
          },
          showModal: false,
        };
      },
    });
    credentials = wrapper.find("#email");
  });

  test("should check if login form exist", () => {
    expect(wrapper.find("form").exists()).toBe(true);
  });

  test("should return value inserted in input", () => {
    credentials.setValue("max@gmail.com");
    expect(credentials.element.value).toMatch("max@gmail.com");
  });

  test("should check if input value is stored in data property", () => {
    credentials.setValue("max@gmail.com");
    expect(wrapper.vm.credentials.email).toMatch("max@gmail.com");
  });

  test("should check if input is empty and display error message", async () => {
    await wrapper.trigger("submit");
    expect(wrapper.vm.error).toMatch("Fill in input fielde's");
  });

  test("should check if user has submitted the form", async () => {
    await wrapper.trigger("submit");
    wrapper.setData({
      showModal: true,
    });
    expect(wrapper.vm.showModal).toBe(true);
  });
});
