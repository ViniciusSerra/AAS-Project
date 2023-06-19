<template>
    <v-card class="h-screen text-white" color="#2484C3" flat height="200px" rounded="0">
        <v-col justify="center">
            <v-row justify="center mt-7">
                <h2 class="font-weight-bold">Administrador</h2>
                <v-divider :thickness="2" class="border-opacity-100 mt-9" color="white"></v-divider>
            </v-row>

            <v-row class="mt-6" justify="center">
                <h2 class="font-weight-light">Cadastro</h2>

            </v-row>
            <v-row align="center" class="mt-6 ml-2" justify="start">
                <v-icon class="mdi mdi-account-group mb-1 mr-2" size="large" ></v-icon>
                <h3>Usuário</h3> 
                <v-btn density="compact" size="x-large" variant="plain" icon="mdi-chevron-right"></v-btn>
            </v-row>
            <v-row align="center" class="mt-6 ml-2 mb-2" justify="start">
                <v-icon class="mdi mdi-home mr-2 mb-1" size="x-large" ></v-icon>
                <h3>Turma/Diciplinas</h3> 
                <v-btn density="compact" size="x-large" variant="plain" icon="mdi-chevron-right"></v-btn>
            </v-row>

        </v-col>
        <v-divider :thickness="2" class="border-opacity-99 " color="white"></v-divider>
    </v-card>
</template>
<script>
export default {
    name: 'userBar',
}
</script>