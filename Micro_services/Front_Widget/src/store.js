import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      name: '',
    };
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
  },
});

export default store;
