export default {
  increment(state) {
    state.counter = state.counter + 2;
  }, //this automatically get the current/guaranteed latest state by default
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
