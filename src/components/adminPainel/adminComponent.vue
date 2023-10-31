<template>

  <v-window v-model="tabsAdmin">
    <v-window-item value="u">
      <gestaoUsuarios />
    </v-window-item>
    </v-window>

    <v-window v-model="tabsAdmin">
      <v-window-item value="a">
        <gestaoAcademica/>
      </v-window-item>
      </v-window>

  <v-window v-model="tabsAdmin">
    <v-window-item value="f">
      <gestaoFinanceira/>

    </v-window-item>
  </v-window>
</template>
<script>
import { mapState } from 'vuex';
import gestaoUsuarios from './tabMenu/gestaoUsuarios.vue';
import gestaoFinanceira from './tabMenu/gestaoFinanceira.vue';
import gestaoAcademica from './tabMenu/gestaoAcademica.vue';
export default {
  name: 'adminComponent',
  computed:{
    ...mapState([
      'tabsAdmin',
    ])
  },
  components: {
    gestaoFinanceira,
    gestaoUsuarios,
    gestaoAcademica
  },
  data(){
    return{
      tab: this.option
    }
  }
}
</script>
