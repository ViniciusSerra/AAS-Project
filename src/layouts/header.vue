
<template>
    <v-navigation-drawer permanent v-model="isOpen" color="light-blue-darken-4 justify-center">
        <v-row justify="start" align="center" class="mt-5 ma-auto">
            <v-app-bar-nav-icon size="x-large" @click="openMenu"></v-app-bar-nav-icon>
            <h1>User type</h1>
            <v-divider class="mt-7"></v-divider>
        </v-row>
    </v-navigation-drawer>
    <v-toolbar flat extended app>
        <v-tool-bar-title class="text-uppercase grey--text justify=center">
            <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
        </v-tool-bar-title>
        <v-spacer></v-spacer>

        <span class="font-weight-light prepend">USername</span>
        <v-btn flat size="x-large">
            <v-icon color="light-blue-accent-3" size="40">mdi-account-circle</v-icon>
        </v-btn>
    </v-toolbar>
    <v-main>

        <Body/>
    </v-main>
</template>

<script>
import Body from './body.vue';

export default {
    name: 'Header',
    data() {
        return {
            isOpen: false
        }
    },
    components: {
        Body
    },
    methods: {
        openMenu: function () {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style>
.header {
    grid-area: headers;
    height: 20%;
}
</style>