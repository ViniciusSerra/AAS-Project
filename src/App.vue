<template>
  <v-app class="grey lighten-4 h-screen">
    <Header />
    <router-view />
  </v-app>

  <router-view />
</template>
<script>
import Header from './layouts/header.vue';
export default {
  components: {
    Header
  }
}
</script>
