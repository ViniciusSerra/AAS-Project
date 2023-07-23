<template>
    
        <v-col>
            <v-sheet class="bg-light-blue-darken-4 mt-5">
                <h3>CADASTROS</h3>
            </v-sheet>
        
        <div>
            <v-expansion-panels variant="inset" class="mt-4">
                <v-expansion-panel class="bg-light-blue-darken-4">
                    <v-expansion-panel-header @click="personPanel">
                        <v-icon class="mdi mdi-account-group ml-5 mb-2 align-center"></v-icon>
                        <v-text class="ml-3">Pessoas</v-text>
                        <v-icon right class="ml-6" :class="{ 'rotate-icon': personExpanded }">
                            mdi mdi-chevron-right
                        </v-icon>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content v-show="personExpanded">
                        <v-list>
                            <v-list-item v-for="(item, index) in users" :key="index">
                                <v-btn size="large" @click="openDialog(item.title)" variant="text">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-btn>
                            </v-list-item>
                        </v-list>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <personRegistration v-if="hasItem" :dialog="openDialog" @fecharModal="fecharModal" :selectedItem="selectedItem" />
        </div><br />

        <div class="justify-space-between">
            <v-expansion-panels variant="inset" class="mt-2">
                <v-expansion-panel class="bg-light-blue-darken-4">
                    <v-expansion-panel-header @click="disciplinePanel">
                        <v-icon class="mdi mdi-account-group ml-5 mb-2 align-center"></v-icon>
                        <v-text class="ml-3">Turmas/Diciplinas</v-text>
                        <v-icon right :class="{ 'rotate-icon': disciplineExpanded }">mdi mdi-chevron-right</v-icon>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content v-show="disciplineExpanded">
                        <v-list>
                            <v-list-item v-for="(item, index) in turmas" :key="index">
                                <v-btn size="large" @click="openDialog(item.title)" variant="text">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-btn>
                            </v-list-item>
                        </v-list>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </v-col>

</template>
<script>
import personRegistration from './personRegistration.vue'
export default{
    name:'adminMenu',
    components:{
        personRegistration,
    },
    computed:{
        hasItem: function(){
            return Boolean(this.selectedItem && !this.dialog )
        }
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
            isOpen: false,
            iconMenu: false,
            valores: {
                turma: [
                    { nome: '3001' },
                    { nome: '3002' },
                    { nome: '3003' },
                    { nome: '3004' }
                ]
            },
            personExpanded: false,
            disciplineExpanded: false,
            selectedItem: null,
            dialog: false
        }
    },
    methods: {
        openMenu: function () {
            this.isOpen = true
        },
        menuIcon: function () {
            this.iconMenu = !this.iconMenu
        },
        personPanel: function () {
            this.personExpanded = !this.personExpanded;
        },
        disciplinePanel: function () {
            this.disciplineExpanded = !this.disciplineExpanded;
        },
        openDialog(title) {
            this.selectedItem = title;
            this.dialog = !this.dialog;

        }
    }
}
</script>
