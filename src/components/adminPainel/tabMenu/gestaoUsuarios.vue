<template>
  <v-container class="">
  <v-card class="">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Pessoas</v-tab>
      <v-tab value="two">Cadastro</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-spacer></v-spacer>
        <v-window-item value="one">
          <UserAdmin/>
        </v-window-item>

        <v-window-item align="center" value="two">
          <v-spacer></v-spacer>
          <personRegistration/>
          <v-spacer></v-spacer>
        </v-window-item>


      </v-window>
    </v-card-text>
  </v-card>
  </v-container>

</template>
<script>
import personRegistration from '@/components/adminPainel/gestaoUsuario/personRegistration.vue';
import UserAdmin from '@/components/adminPainel/gestaoUsuario/usuarios.vue'
export default {
  name: "gestaoUsuarios",
  components:{
    personRegistration,
    UserAdmin
  },
  data() {
    return {
      tab: null,
    }
  }
};
</script>
