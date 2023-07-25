<template>
  <v-row class="ml-2">
  <v-col>
      <v-sheet class="bg-light-blue-darken-4 ">
          <h3>CADASTROS</h3>
      </v-sheet>
  </v-col>
  <div class="align-start">
      <v-menu  class=" align-center justify-center">
          <template v-slot:activator="{ props }">
              <v-icon class="mdi mdi-account-group ml-5 mb-2 align-center">
              </v-icon>
              <v-text class="ml-3">Alunos</v-text>
              <v-btn  @click="openDialog" icon="mdi mdi-chevron-right" class="ml-3" variant="plain" color="white" v-bind="props">
              </v-btn>
            </template>
      </v-menu>
    </div>
    <cadastro v-if="this.dialog == true" @close="fecharModal" :cadastrarUsuario="true"/>
  <div class="justify-space-between">
      <v-menu class=" align-start justify-center">
          <template v-slot:activator="{ props }">
              <v-icon class="mdi mdi-account-group ml-5 mb-2 align-center">
              </v-icon>
              <v-text class="ml-3">Responsável</v-text>
              <v-btn icon="mdi mdi-chevron-right" variant="plain" color="white" v-bind="props">

              </v-btn>
          </template>

      </v-menu>
  </div>
  <div class="justify-space-between">
      <v-menu class=" align-start justify-center">
          <template v-slot:activator="{ props }">
              <v-icon class="mdi mdi-account-group ml-5 mb-2 align-center">
              </v-icon>
              <v-text class="ml-3">Turmas</v-text>
              <v-btn icon="mdi mdi-chevron-right" variant="plain" color="white" v-bind="props">

              </v-btn>
          </template>

      </v-menu>
  </div>
</v-row>
</template>
<script>
import cadastro from '@/components/secretaryPainel/cadastros.vue'


export default{
  name:'secretaryMenu',
  components:{cadastro},
  data(){
    return {
      dialog:false
    }
  },
  methods:{
    openDialog: function(){
      this.dialog = !this.dialog
      console.log(this.dialog)
    },
    fecharModal: function(){
      this.dialog = false
      console.log(this.dialog)
    }
  }
}
</script>
