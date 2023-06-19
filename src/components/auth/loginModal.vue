<template>
  <v-row align="center" class="pb-16" justify="center">
    <v-col cols="12" sm="7">

      <v-row align="center" justify="center" style="background-color: #44b8d7;">
        <v-col cols="12" sm="10">
          <v-card-text class="mt-5">
            <v-img
              src="https://ik.imagekit.io/nck7tb9bc/AAS/Design_sem_nome__2_-removebg-preview.png?updatedAt=1687049382460">
            </v-img>
            <v-row v-if="loading == false" align="center" class="mt-5" justify="center">
              <v-col cols="12" sm="8">
                <v-row align="center">
                  <v-icon icon="mdi-email" class="mr-2" color="white"> </v-icon>
                  <v-text-field clearable class="text-white font-weight-bold" label="Login ID" variant="underlined">
                  </v-text-field>
                </v-row>
                <v-row align="center">
                  <v-icon icon="mdi-lock" color="white" class="mr-2"> </v-icon>
                  <v-text-field clearable class="text-white font-weight-bold" label="senha" type="password"
                    variant="underlined">
                  </v-text-field>
                </v-row>
                <v-row cols="6" sm="6" justify="center">
                  <v-checkbox style="color: white;" label="Lembrar infomações de login">
                  </v-checkbox>
                </v-row>
                <v-row>
                  <v-btn block rounded="xl" elevation="0.5" style="background-color: #ffffff7b;"
                    class="text-white font-weight-bold" @click="login">
                    Entrar
                  </v-btn>
                </v-row>
                <v-row class="mt-6">
                  <v-btn block size="x-small" variant="plain" color="white" elevation="0">
                    Esqueci a senha
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
            <v-row v-if="loading == true">
              <v-progress-linear color="white" indeterminate rounded height="6"></v-progress-linear>
              <v-img class="mt-15"
                src='https://ik.imagekit.io/nck7tb9bc/AAS/Design-sem-nome-unscreen.gif?updatedAt=1687056084530'></v-img>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>

    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'loginModal',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    login: function () {
      this.loading = true,
        console.log('login')
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }

  }

}
</script>
