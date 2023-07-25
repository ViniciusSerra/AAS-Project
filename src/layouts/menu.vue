<template>
  <v-navigation-drawer permanent color="light-blue-darken-4">
    <v-row align="center" class="ma-auto align-center justify-center">
      <h1 class="ma-3">{{ userType }}</h1>
      <v-divider :thickness="2" class="border-opacity-100" color="white"></v-divider>

      <adminMenu v-if="admin" />
      <secretaryMenu v-if="secretary" />
      <v-template v-if="responsible" class='w-100'>
        <div class="ma-5">
          <v-text class="font-weight-black text-h7  text-white"> Nome do aluno: </v-text> <br />
          <v-text>{{ aluno.nome }}</v-text>
        </div>
        <v-divider :thickness="2" class="border-opacity-100" color="white"></v-divider>
        <div class="justify-space-between ma-5">
          <v-text class="font-weight-black text-h7 text-white">Turma: </v-text>
          <v-text>{{ aluno.turma }}</v-text>
        </div>
        <v-divider :thickness="2" class="border-opacity-100" color="white"></v-divider>
        <div class="ma-5">
          <v-text class="font-weight-black text-h7 text-white"> Nome do Professor: </v-text> <br />
          <v-text>{{ aluno.professor }}</v-text>
        </div>
        <v-divider :thickness="2" class="border-opacity-100" color="white"></v-divider>
      </v-template>

      <v-template v-if="teacher" class="justify-center w-100">
        <v-col cols="12" class="w-100">
          <v-row>
            <v-col v-for="turma in valores.turma" :key="turma.nome" cols="12">
              <v-btn @click="acaoDoBotao(turma)" variant="text" class="text-h7 S font-weight-black ">
                <v-icon class="mb-1 mr-2 ">
                  mdi-account-group
                </v-icon>
                <v-text>
                  Turma:
                </v-text> {{ turma.nome }}
              </v-btn>
            </v-col>
            <v-divider class="border-opacity-100 mt-2" color="white"></v-divider>

          </v-row>
        </v-col>

      </v-template>
    </v-row>
  </v-navigation-drawer>
  <v-toolbar flat app>
    <v-tool-bar-title class="text-uppercase grey--text justify=center">
      <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
    </v-tool-bar-title>
    <v-spacer></v-spacer>
    <span class="font-weight-light prepend mr-2">{{ user.user.first_name }} {{ user.user.last_name }}</span>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>

      <v-list class="ml-5 w-35 ">
        <v-list-item>

          <v-col class="justify-start">
            <v-sheet class="ml-3 ">

              <ChangeUser  />
            </v-sheet>
            <v-sheet class="mt-4">
              <v-btn variant="text" @click="logout" size="large" class="size-30"> <v-icon class="mr-1">mdi
                  mdi-exit-to-app</v-icon> Sair</v-btn>
            </v-sheet>
          </v-col>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-toolbar>
</template>

<script>
import adminMenu from '@/components/adminPainel/adminMenu.vue';
import secretaryMenu from '@/components/secretaryPainel/secretaryMenu.vue';
import ChangeUser from '@/components/auth/ChangeUser.vue';
import { mapState } from 'vuex';

export default {
  name: "menuExtend",
  components: {
    adminMenu,
    secretaryMenu,
    ChangeUser
  },
  computed: {
    ...mapState(['user'])
  },
  props: {
    responsible: Boolean,
    admin: Boolean,
    userType: String,
    secretary: Boolean,
    teacher: Boolean
  },
  data() {
    return {
      users: [
        { title: 'Secretário' },
        { title: 'Professor' },
        { title: 'Funcionários' },
      ],
      turmas: [
        { title: 'Diciplinas' },
        { title: 'Salas' },
        { title: 'Turmas ' },
      ],
      aluno: {
        nome: 'Alberto Sousa da Silva',
        turma: 'T-3002',
        professor: 'Rogerio Cruz Marques '
      },
      isOpen: false,
      iconMenu: false,
      valores: {
        turma: [
          { nome: '3001' },
          { nome: '3002' },
          { nome: '3003' },
          { nome: '3004' }
        ]
      },
      personExpanded: false,
      disciplineExpanded: false,
      selectedItem: null,
      dialog: false
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
    fecharModal() {
      this.dialog = !this.dialog
    },
    async logout() {
      try {
        window.localStorage.removeItem('user-token');
        this.$router.push('/login');
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
      }
    }

  }
}
</script>
<style>
.rotate-icon {
  transform: rotate(90deg);
}
</style>
