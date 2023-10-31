<template>
  <v-col class="align-start">
    <v-sheet class="bg-light-blue-darken-4 mt-5 ">
      <h3>CADASTROS</h3>
    </v-sheet>

    <v-tabs v-model="tabChange" direction="vertical" @click="emitValueTab">
      <v-tab value="u">
        <v-icon start>
          mdi-account-group
        </v-icon>
        Gestão usuários
      </v-tab>

      <v-tab value="a">
        <v-icon start>
          mdi-account-group
        </v-icon>
        Gestão Academica
      </v-tab>

      <v-tab value="f">
        <v-icon start>
          mdi-account-group
        </v-icon>
        Gestão Financeira
      </v-tab>
    </v-tabs>
  </v-col>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'adminMenu',
  components: {
  },
  computed: {
    hasItem: function () {
      return Boolean(this.selectedItem && !this.dialog)
    },
    ...mapMutations([
      'setTabsAdmin'
    ])
  },
  data() {
    return {
      tabChange: "option-1",
      users: [
        { title: 'Secretário' },
        { title: 'Professor' },
        { title: 'Funcionários' },
      ],
    }
  },
  methods: {
    openMenu: function () {
      this.isOpen = true
    },
    menuIcon: function () {
      this.iconMenu = !this.iconMenu
    },
    personPanel: function () {
      this.personExpanded = !this.personExpanded;
    },
    disciplinePanel: function () {
      this.disciplineExpanded = !this.disciplineExpanded;
    },
    openDialog(title) {
      this.selectedItem = title;
      this.dialog = !this.dialog;
    },
    emitValueTab: function () {
      console.log(this.tabChange)
      this.$emit('tabsAdmin', this.tabChange)
      this.$store.commit('setTabAdmin', this.tabChange);
    }
  }
}
</script>

