<template>
  <v-container class="h-100">
  <v-card class="">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Pessoas</v-tab>
      <v-tab value="two">Cadastro</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <users-admin/>
        </v-window-item>

        <v-window-item value="two">
          <personRegistration/>
          <v-data-table :headers="header" :items="users"  class="elevation-1">oi


          </v-data-table>
        </v-window-item>


      </v-window>
    </v-card-text>
  </v-card>
  </v-container>
</template>
<script>
import personRegistration from './personRegistration.vue';
import usersAdmin from './usuarios.vue';
export default {
  name: "gestaoUsuarios",
  components:{
    personRegistration,
    usersAdmin
  },
  data() {
    return {
      tab: null,
    }
  }
};
</script>
