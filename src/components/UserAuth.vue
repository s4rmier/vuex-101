<template>
  <button v-if="!authenticationState" @click="authenticate({ value: true })">
    Log In
  </button>
  <button v-else @click="authenticate({ value: false })">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['authenticate']),
  },

  computed: {
    ...mapGetters(['authenticationState']),
  },
};
</script>
