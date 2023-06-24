<template>
    <v-navigation-drawer permanent color="light-blue-darken-4">
        <v-row align="center" class="ma-auto align-center justify-center">
            <!-- <v-app-bar-nav-icon size="x-large" ></v-app-bar-nav-icon> -->
            <h1 class="ma-3">{{ userType }}</h1>
            <v-divider :thickness="2" class="border-opacity-100" color="white"></v-divider>
            <v-template v-if="admin">
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
            </v-template>
            <v-template v-if="responsible" class='w-100'>
                <div class="ma-5">
                    <v-text class="font-weight-black text-h7  text-white"> Nome do aluno: </v-text> <br />
                    <v-text>{{ aluno.nome }}</v-text>
                </div>
                <v-divider :thickness="2" class="border-opacity-100" color="white"></v-divider>
                <div class="justify-space-between ma-5">
                    <v-text class="font-weight-black text-h7 text-white">Turma: </v-text>
                    <v-text>{{ aluno.turma }}</v-text>
                </div>
                <v-divider :thickness="2" class="border-opacity-100" color="white"></v-divider>
                <div class="ma-5">
                    <v-text class="font-weight-black text-h7 text-white"> Nome do Professor: </v-text> <br />
                    <v-text>{{ aluno.professor }}</v-text>
                </div>
                <v-divider :thickness="2" class="border-opacity-100" color="white"></v-divider>
            </v-template>
            <v-template v-if="secretary" class="align-start  w-100">
                <v-col>
                    <v-sheet class="bg-light-blue-darken-4 ">
                        <h3>CADASTRADOS</h3>
                    </v-sheet>
                </v-col>
                <div class="align-start">
                    <v-menu :location="location" class=" align-center justify-center">
                        <template v-slot:activator="{ props }">
                            <v-icon class="mdi mdi-account-group ml-5 mb-2 align-center">
                            </v-icon>
                            <v-text class="ml-3">Alunos</v-text>
                            <v-btn icon="mdi mdi-chevron-right" class="ml-3" variant="plain" color="white" v-bind="props">

                            </v-btn>
                        </template>


                    </v-menu>
                </div>
                <div class="justify-space-between">
                    <v-menu :location="location" class=" align-start justify-center">
                        <template v-slot:activator="{ props }">
                            <v-icon class="mdi mdi-account-group ml-5 mb-2 align-center">
                            </v-icon>
                            <v-text class="ml-3">Responsável</v-text>
                            <v-btn icon="mdi mdi-chevron-right" variant="plain" color="white" v-bind="props">

                            </v-btn>
                        </template>

                    </v-menu>
                </div>
                <div class="justify-space-between">
                    <v-menu :location="location" class=" align-start justify-center">
                        <template v-slot:activator="{ props }">
                            <v-icon class="mdi mdi-account-group ml-5 mb-2 align-center">
                            </v-icon>
                            <v-text class="ml-3">Turmas</v-text>
                            <v-btn icon="mdi mdi-chevron-right" variant="plain" color="white" v-bind="props">

                            </v-btn>
                        </template>

                    </v-menu>
                </div>
            </v-template>
            <v-template v-if="teacher" class="justify-center w-100">
                <v-col cols="12" class="w-100">
                    <v-row>
                        <v-col  v-for="turma in valores.turma" :key="turma.nome" cols="12">
                            <v-btn @click="acaoDoBotao(turma)" variant="text" class="text-h7 S font-weight-black ">
                                <v-icon class="mb-1 mr-2 ">
                                    mdi-account-group
                                </v-icon>
                                <v-text>
                                    Turma:
                                </v-text> {{ turma.nome }}
                            </v-btn>
                        </v-col>
                            <v-divider class="border-opacity-100 mt-2" color="white"></v-divider>

                    </v-row>
                </v-col>

            </v-template>
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
                <v-btn class="ml-2" color="light-blue-accent-3" size="large" v-bind="props">
                    <v-icon color="light-blue-accent-3" size="40">mdi-account-circle</v-icon>
                </v-btn>
            </template>
            <v-card class="mb-5">
                <v-col>
                    <v-sheet class="ma-2 m">

                        <v-btn variant="text" class="size-30" size="large"> <v-icon>
                                mdi-account-edit-outline
                            </v-icon>Editar Perfil</v-btn>
                    </v-sheet>
                    <v-sheet class="ma-2">
                        <v-btn variant="text" size="large" class="size-30"> <v-icon class="mr-1">mdi
                                mdi-exit-to-app</v-icon> Sair</v-btn>
                    </v-sheet>
                </v-col>
            </v-card>
        </v-menu>

    </v-toolbar>
</template>

<script>
export default {
    name: "menuExtend",
    props: {
        responsible: Boolean,
        admin: Boolean,
        userType: String,
        secretary: Boolean,
        teacher:Boolean
    },
    data() {
        return {
            users: [
                { title: 'Secretário' },
                { title: 'Professor' },
                { title: 'Funcionários' },
            ],
            turmas: [
                { title: 'Diciplinas' },
                { title: 'Salas' },
                { title: 'Turmas ' },
            ],
            aluno: {
                nome: 'Alberto Sousa da Silva',
                turma: 'T-3002',
                professor: 'Rogerio Cruz Marques '
            },
            isOpen: false,
            iconMenu: false,
            valores: {
                turma: [
                    { nome: '3001' },
                    { nome: '3002' },
                    { nome: '3003' },
                    { nome: '3004' }
                ]
            }

        }
    },
    methods: {
        openMenu: function () {
            this.isOpen = true
        },
        menuIcon: function () {
            this.iconMenu = !this.iconMenu
        }
    }
}
</script>
