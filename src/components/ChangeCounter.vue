<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addTwo() {
    //   this.$store.dispatch('increment');
    // },
    // ...mapActions(['increment', 'increase']),
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>
