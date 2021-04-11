<template>
  <div>
    logging out
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  layout: 'empty',

  mounted() {
    this.$axios.$get('api/app/auth/logout')
    .then((r) => {
      this.$store.dispatch('logout');
      this.$router.push({ path: 'login' });
    });
  }
}
</script>
