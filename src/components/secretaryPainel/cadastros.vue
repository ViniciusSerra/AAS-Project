<template>
  <v-row justify="center">
    <v-dialog v-model="openModal" persistent max-width="1024px">
      <v-card>
        <v-card-title class="text-h5  text-center bg-light-blue-darken-4">
          <span class="text-h5 mt-5 text-center">Cadastro de Alunos</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <span class="text-h5 mt-5 text-center">Dados pessoais</span>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field variant="underlined" v-model="usuario.nome" label="Nome*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field variant="underlined" v-model="usuario.sobrenome" label="Sobrenome*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-dialog ref="menu" v-model="menu" width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field variant="underlined" v-model="usuario.nascimento" label="Data de nascimento*"
                      v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="usuario.nascimento" @input="menu = false"></v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field variant="underlined" v-model="usuario.rg" label="RG*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field variant="underlined" v-model="usuario.cpf" label="CPF*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field variant="underlined" v-model="usuario.nome_pai" label="Nome do Pai"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field variant="underlined" v-model="usuario.nome_mae" label="Nome da Mãe"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field variant="underlined" v-model="usuario.endereco.naturalidade"
                  label="Naturalidade"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field variant="underlined" v-model="usuario.alergico.alergia" label="Alergia"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                  <v-select :items="selecionarDeficiencia" v-model="usuario.deficiente.deficiencia"  variant="underlined"
                  label="Deficiência"></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="3">

                <v-select :items="selecionarSexo" v-model="usuario.sexo.sexo" variant="underlined"
                  label="Sexo"></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select :items="etniaNome" v-model="usuario.etinia.etinia" variant="underlined"
                  label="Etnia"></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select :items="tipoSaguinio" v-model="usuario.tipo_sanguinio.tipo" variant="underlined"
                  label="Tipo sanguinio"></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field variant="underlined" v-model="usuario.turno.turno" label="turno"></v-text-field>
              </v-col>
              <v-divider></v-divider>
              <v-col cols="12">
                <span class="text-h5 mt-5 text-center">Contatos</span>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field variant="underlined" v-model="usuario.contato.celular" label="Celular"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field variant="underlined" v-model="usuario.contato.telefone" label="Celular 2 "></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field variant="underlined" v-model="usuario.contato.email" label="email"></v-text-field>
              </v-col>
              <v-divider></v-divider>
              <v-col cols="12">
                <span class="text-h5 mt-5 text-center">Endereço</span>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field variant="underlined" v-model="usuario.endereco.cep" label="CEP"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <v-text-field variant="underlined" v-model="usuario.endereco.logradouro"
                  label="logradouro"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field variant="underlined" v-model="usuario.endereco.numero" label="Número"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <v-text-field variant="underlined" v-model="usuario.endereco.completo" label="Complemento"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="12">
                <v-text-field variant="underlined" v-model="usuario.endereco.ponto_refrencia"
                  label="Ponto de referência"></v-text-field>
              </v-col>

            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="close"> Close </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import alunocadastro from "@/assets/json/alunocadastro.json"
import api from '@/services/index';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'cadastro',
  props: {
    cadastrarUsuario: Boolean
  },
  data() {
    return {
      openModal: Boolean,
      menu: false,
      usuario: alunocadastro,
      etnia: [],
      tipoSangue: [],
      sexo: [],
      deficiencias: []
    }
  },
  computed: {
    etniaNome() {
      return this.etnia.map(etnia => etnia.etnia);
    },
    tipoSaguinio() {
      return this.tipoSangue.map(tipoSangue => tipoSangue.tipo)
    },
    selecionarSexo(){
      return this.sexo.map(sexo => sexo.sexo)
    },
    selecionarDeficiencia(){
      return this.deficiencias.map(deficiencias => deficiencias.deficiencia)
    }
  },
  methods: {
    open() {
      this.openModal = this.cadastrarUsuario;
      console.log(this.cadastrarUsuario, 'cadastro');
    },
    close() {
      this.$emit('close');
    },
    save() {
      console.log(this.usuario);
    },
    buscandoEtnia() {
      api
        .get("etnia/")
        .then((res) => {
          this.etnia = res.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
    buscaTipoSanguinio() {
      api
        .get("TipoSanguinio/")
        .then((res) => {
          this.tipoSangue = res.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
    buscandoSexo() {
      api
        .get("sexo/")
        .then((res) => {
          this.sexo = res.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
    buscandoDeficiencias() {
      api
        .get("deficiencias/")
        .then((res) => {
          this.deficiencias = res.data
        })
        .catch((error) => {
          console.log(error);
        });
    },

    buscandoParamentros: function () {
      this.buscandoEtnia();
      this.buscaTipoSanguinio();
      this.buscandoSexo();
      this.buscandoDeficiencias();
    }
  },
  mounted() {
    this.buscandoParamentros();
  },
  created() {
    this.open();

  },
}

</script>
