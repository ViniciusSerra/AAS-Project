<template>
  <v-container class="h-100">
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field label="Nome" v-model="nome" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Sobronome" v-model="sobrenome"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Email*" v-model="email" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-select v-model="tipoAcesso" :items="['Administrador', 'Secretario', 'Professor', 'Responsável', 'Aluno']"
          label="tipo de acesso" required></v-select>
      </v-col>
      <v-col cols="12" sm="6">

        <v-text-field v-model="usuarioLogin" label="Usuario para Acesso" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field v-model="senha" label="Senha*" type="password" required></v-text-field>
      </v-col>


    </v-row>
  </v-container>


  <v-spacer></v-spacer>
  <v-row max-width="50%" class="justify-space-around ">
    <v-btn color="blue-darken-1" variant="text" @click="cleanModal">
      Limpar
    </v-btn>
    <v-btn color="blue-darken-1" variant="text" @click="saveUser">
      Salvar
    </v-btn>
  </v-row>

  <v-spacer></v-spacer>
</template>

<script>
import api from '@/services/index.js';
export default {
  name: "personRegistration",
  data() {
    return {
      nome: '',
      sobrenome: '',
      email: '',
      tipoAcesso: '',
      usuarioLogin: '',
      senha: ''
    }
  },
  computed: {

  },
  methods: {
    cleanModal: function () {
      this.nome = '';
      this.sobrenome = '';
      this.email = '';
      this.tipoAcesso = '';
      this.usuarioLogin = '';
      this.senha = '';
    },
    saveUser: function () {
      api.post('/newUser', {
        nome: this.nome,
        sobrenome: this.sobrenome,
        email: this.email,
        tipoAcesso: this.tipoAcesso,
        usuarioLogin: this.usuarioLogin,
        senha:this.senha
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(this.nome, this.sobrenome, this.email, this.tipoAcesso, this.usuarioLogin, this.senha)
    }
  },
};
</script>
