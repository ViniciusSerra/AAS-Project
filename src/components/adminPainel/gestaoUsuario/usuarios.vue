<template>
  <div>
    <v-card>
      <v-data-table :headers="headers" :items="users" class="elevation-1">
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import api from '@/services/index';
import { format } from 'date-fns';
export default {
  name: 'UserAdmin',
  data() {
    return {
      headers: [
        {
          title: 'Username',

          key: 'username',
        },
        { title: 'Nome', key: 'nome' },
        { title: 'Sobrenome', key: 'sobrenome' },
        { title: 'Email', key: 'email' },
        { title: 'Acesso', key: 'acesso' },
        { title: 'Ativo', key: 'online' },
        { title: 'Ultimo acesso', key: 'ultimo_acesso' },
        { title: 'Data de cadastro', key: 'data_cadastro' },
      ],
      users: []
    }
  },
  methods: {
    async findUsers() {
      try {
        const response = await api.get('allUsers/');
        this.users = response.data.map(user => ({
          username: user.username,
          nome: user.first_name,
          sobrenome: user.last_name,
          email: user.email,
          acesso: user.is_superuser ? 'Administrador' : 'Usuário',
          ultimo_acesso: format(new Date(user.last_login), 'dd/MM/yyyy HH:mm:ss'),
          online: user.is_active ? 'Sim' : 'Não',
          data_cadastro: format(new Date(user.date_joined), 'dd/MM/yyyy HH:mm:ss'),
        }));
        console.log(this.users);
      } catch (error) {
        this.falha = true;
        console.log(error?.response?.data)
      } finally {
        this.loading = false
      }
    },
  },
  created() {
    this.findUsers()
  }
}
</script>
