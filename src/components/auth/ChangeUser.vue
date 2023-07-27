<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" activator="parent" max-width="750px" max-height="850px" transition="dialog-bottom-transition">
      <template v-slot:activator="{ props }">
        <v-btn size="large" variant="text" v-bind="props">
          <v-icon>
            mdi-account-edit-outline
          </v-icon>Editar Perfil</v-btn>

      </template>
      <v-card>
        <v-card-title class="text-center tabAdmin">
          <span class="text-h5">Perfil do Usuário</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Nome *" variant="underlined" required v-model="user.user.first_name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Sobrenome" variant="underlined"  v-model="user.user.last_name" persistent-hint required></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field label="Email" variant="underlined" v-model="user.user.email" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="10">
                <v-text-field v-model="user.user.oldPassword" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required]" variant="underlined"
                  :type="show3 ? 'text' : 'password'" name="input-10-1" label="Senha antiga" hint="" counter
                  @click:append="show3 = !show3">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="10">
                <v-text-field v-model="user.user.password"  variant="underlined" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min, rules.uppercase, rules.lowercase, rules.number, rules.specialChar]"
                  :type="show1 ? 'text' : 'password'" name="input-10-1" label="Senha" hint="" counter
                  @click:append="show1 = !show1">
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="10">
                <v-text-field v-model="confirmPassword" variant="underlined" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min, rules.uppercase, rules.lowercase, rules.number, rules.specialChar, passwordMatchRule]"
                  :type="show2 ? 'text' : 'password'" label="Confirme a senha" @click:append="show2 = !show2">
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="closeDialog">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" :disabled="!validarSave" variant="text" @click="salvarUsuario">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapState } from 'vuex';
import api from '@/services/index';
export default {
  computed: {
    ...mapState(['user']),
    passwordMatchRule() {
      return v => v === this.user.user.password || 'As senhas não coincidem';
    },
    validarSave() {
      return this.passwordMatchRule(this.confirmPassword) === true;
    }

  },
  name: "changeUser",
  data: () => ({
    show1: false,
    show2: false,
    show3: false,
    newUserData:[],
    password: '',
    confirmPassword: '',
    rules: {
      required: value => !!value || 'Obrigatório.',
      min: v => v.length >= 8 || 'Mínimo de 8 caracteres',
      uppercase: v => /[A-Z]/.test(v) || 'Deve ter pelo menos uma letra maiúscula',
      lowercase: v => /[a-z]/.test(v) || 'Deve ter pelo menos uma letra minúscula',
      number: v => /\d/.test(v) || 'Deve ter pelo menos um número',
      specialChar: v => /[^A-Za-z0-9]/.test(v) || 'Deve ter pelo menos um caractere especial',
      match: v => v === this.password || 'As senhas não coincidem'
    },
    dialog: false
  }),

  methods: {
    closeDialog: function () {
      this.dialog = false
    },
    async salvarUsuario() {
      try {
        const response = await api.post('/user/', this.user.user)
        console.log(response)

      } catch (error) {
        console.error('Erro ao fazer salvar usuario:', error);
      }
    }
  }
}
</script>
