import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },

  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    }, //this automatically get the current/guaranteed latest state by default
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },

  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    }, //you can use the same name as you have used in mutations
    increase(context, payload) {
      setTimeout(function () {
        // console.log(context);
        context.commit('increase', payload);
      }, 2000);
    }, //you can use the same name as you have used in mutations
    //actions will automatically get context as an argument.
  },

  getters: {
    finalCounter(state) {
      return state.counter;
    },

    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
