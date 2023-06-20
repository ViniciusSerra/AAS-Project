<template>
  <v-app class="grey lighten-4 h-screen">
    <Header />
    <router-view />
  </v-app>

  <router-view />
</template>
<script>
import Header from './layouts/header.vue';
import Body from './layouts/body.vue';
export default {
  components: {
    Header,
    Body
  }
}
</script>
