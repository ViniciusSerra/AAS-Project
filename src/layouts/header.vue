
<template>
    <v-toolbar flat app color="">
        <v-tool-bar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Administrador</span>
        </v-tool-bar-title>
        <v-spacer></v-spacer>
        <v-btn flat>
            <v-icon color="light-blue-accent-3" size="x-large">mdi-account-circle</v-icon>
        </v-btn>

    </v-toolbar>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
.header {
    grid-area: headers;
    height: 20%;
}
</style>