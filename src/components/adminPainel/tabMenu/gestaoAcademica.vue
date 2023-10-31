<template>
  <v-container class="">
    <v-card class="">
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="T">Turma</v-tab>
        <v-tab value="D">diciplina</v-tab>
        <v-tab value="S">salas</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-spacer></v-spacer>
          <v-window-item value="T">
            <turmaComponente />
            <v-space></v-space>
          </v-window-item>

          <v-window-item  value="D">
            <v-spacer></v-spacer>
            <diciplinasComponente />
            <v-spacer></v-spacer>

          </v-window-item>
          <v-window-item  value="S">
            <v-spacer></v-spacer>
            <salasComponente />
            <v-spacer></v-spacer>
          </v-window-item>

        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import turmaComponente from '@/components/adminPainel/gestaoAcademica/turmaComponente.vue';
import diciplinasComponente from '@/components/adminPainel/gestaoAcademica/diciplinasComponente.vue';
import salasComponente from '@/components/adminPainel/gestaoAcademica/salasComponente.vue';
export default {
  name: 'gestaoAcademica',
  components: {
    turmaComponente,
    diciplinasComponente,
    salasComponente
  },
  data() {
    return {
      tab: null,
    }
  }
}
</script>
