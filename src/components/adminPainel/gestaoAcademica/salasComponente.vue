<template>
  <v-container>
    <v-row class="d-flex justify-end">
      <v-btn color="primary" @click="mostrarModal">
        Nova Sala
        <v-icon class="ml-1">mdi mdi-pencil</v-icon>
      </v-btn>
    </v-row>
  </v-container>

  <v-dialog v-model="modalAberto" max-width="500">
    <CadastroSala v-if="modalAberto" @fecharModal="fecharModal" />
  </v-dialog>

  <v-card>
    <v-data-table :headers="headers" :items="users" class="elevation-1">
    </v-data-table>
  </v-card>
  <v-container>
  </v-container>
</template>

<script>
import CadastroSala from './CadastroSala.vue';

export default {
  name: 'salasComponente',
  components: {
    CadastroSala,
  },
  data() {
    return {
      headers: [
        {
          title: 'Nome da Sala',
          key: 'nome_sala',
        },
        { title: 'Número da Sala', key: 'numero_sala' },
        { title: 'Tamanho da Sala', key: 'tamanho_sala' },
        { title: 'Descrição da Sala', key: 'descricao_sala' },
        { title: 'Acesso Restrito', key: 'acesso_restrito' },
        { title: 'Sala Ativa', key: 'sala_ativa' },
        { title: 'Data da Última Aula', key: 'data_ultima_aula' },
        { title: 'Data de Criação da Sala', key: 'data_criacao_sala' },
      ],
      users: [],
      modalAberto: false,
    };
  },
  methods: {
    mostrarModal() {
      this.modalAberto = true;
    },
    fecharModal() {
      this.modalAberto = false;
    },
  },
};
</script>
