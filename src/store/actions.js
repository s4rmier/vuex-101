export default {
  authenticate(context, payload) {
    context.commit('setAuthentication', payload);
  },
};
