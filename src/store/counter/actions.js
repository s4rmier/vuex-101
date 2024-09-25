export default {
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
};
