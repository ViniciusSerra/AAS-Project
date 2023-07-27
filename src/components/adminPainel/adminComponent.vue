<template>

  <v-window v-model="tabsAdmin">
    <v-window-item value="u">
      <gestaoUsuarios />
    </v-window-item>
    </v-window>


  <v-window v-model="tabsAdmin">
    <v-window-item value="f">
      <ValuesCards />
    </v-window-item>
  </v-window>
</template>
<script>
import { mapState } from 'vuex';
import gestaoUsuarios from './gestaoUsuarios.vue';
import ValuesCards from './valuesCards.vue';
export default {
  name: 'adminComponent',
  computed:{
    ...mapState([
      'tabsAdmin',
    ])
  },
  components: {
    ValuesCards,
    gestaoUsuarios
  },
  data(){
    return{
      tab: this.option
    }
  }
}
</script>
