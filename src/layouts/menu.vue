<template>
    <!--Menu Admin -->
    <v-navigation-drawer permanent v-model="isOpen" color="light-blue-darken-4">
        <v-row justify="start" align="center" class=" ma-auto">
            <v-app-bar-nav-icon size="x-large" @click="openMenu"></v-app-bar-nav-icon>
            <h1 class="ml-3">User type</h1>
            <v-divider :thickness="2" class="border-opacity-100" color="white"></v-divider>
            <v-col>
                <v-sheet class="bg-light-blue-darken-4 mt-5">
                    <h3>CADASTRADOS</h3>
                </v-sheet>
            </v-col>
            <div class="justify-space-between">
                <v-menu :location="location" class=" align-center justify-center">
                    <template v-slot:activator="{ props }">
                        <v-icon class="mdi mdi-account-group ml-5 mb-2 align-center">
                        </v-icon>
                        <v-text class="ml-3">Pessoas</v-text>
                        <v-btn icon="mdi mdi-chevron-right" class="ml-3" variant="plain" size="large" color="white"
                            v-bind="props">

                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="(item, index) in users" :key="index">
                            <v-btn size="large" variant="text">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-btn>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div class="justify-space-between">
                <v-menu :location="location" class=" align-center justify-center">
                    <template v-slot:activator="{ props }">
                        <v-icon class="mdi mdi-account-group ml-5 mb-2 align-center">
                        </v-icon>
                        <v-text class="ml-3">Turmas/Diciplinas</v-text>
                        <v-btn icon="mdi mdi-chevron-right" class="ml-2" variant="plain" size="large" color="white"
                            v-bind="props">

                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="(item, index) in  turmas" :key="index">
                            <v-btn size="large" variant="text">
                                <v-list-item-title>
                                    {{ item.title }}
                                </v-list-item-title>
                            </v-btn>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-row>
    </v-navigation-drawer>
    <v-toolbar flat app>
        <v-tool-bar-title class="text-uppercase grey--text justify=center">
            <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
        </v-tool-bar-title>
        <v-spacer></v-spacer>
        <span class="font-weight-light prepend">USername</span>
        <v-menu :location="location" class=" align-center justify-center">
            <template v-slot:activator="{ props }">
                <v-btn class="ml-2" color="light-blue-accent-3" variant="plain" size="z-large" v-bind="props">
                    <v-icon color="light-blue-accent-3" size="40">mdi-account-circle</v-icon>
                </v-btn>
            </template>
            <v-card class="mr-8 mb-5">
                <v-col>
                    <v-col> <v-btn>oi</v-btn> </v-col>o
                    <v-col> <v-btn>oi</v-btn> </v-col>
                    <v-col> <v-btn>oi</v-btn> </v-col>
                </v-col>
            </v-card>
        </v-menu>

    </v-toolbar>
</template>

<script>
export default {
    name: "menuExtend",
    data() {
        return {
            users: [
                { title: 'user_type ' },
                { title: 'user_type ' },
                { title: 'user_type  user_type' },
                { title: 'user_type ' },
            ],
            turmas: [
                { title: 'Diciplinas' },
                { title: 'Salas' },
                { title: 'Turmas ' },
            ],
            isOpen: false
        }
    },
    methods: {
        openMenu: function () {
            this.isOpen = !this.isOpen
        }
    }
}
</script>
