<template class="bg-grey-lighten-2">
    <h1 class="text-blue-darken-1 ml-8" >turma A</h1>
    <v-container class="blue-grey-lighten-5" >
        <v-toolbar class="text-blue-darken-1 text-h5 mr-6  bg-white">
            <v-text class="ml-3 font-weight-bold">
                Dias de aula:
            </v-text>
            <v-text class="font-weight-light">
                Segunda à sexta
            </v-text>
            <v-spacer></v-spacer>
            <v-text class="ml-3 font-weight-bold">
                Horários de aula:
            </v-text>
            <v-text class="font-weight-light">
                07:00 às 12:00
            </v-text>
            <v-spacer></v-spacer>
            <v-text class="ml-3 font-weight-bold">
                Ano letivo:
            </v-text>
            <v-text class="font-weight-light">
                2023
            </v-text>
            <v-spacer></v-spacer>
            <v-text class="ml-3 font-weight-bold">
                DIAS Letivos:
            </v-text>
            <v-text class="font-weight-light">
                201
            </v-text>
            <v-spacer></v-spacer>
        </v-toolbar>
    </v-container>
    <teacherCards/>
</template>
<script>
import teacherCards from './teacherCards.vue';
export default {
    nome: 'teacherComponent',
    components:{
        teacherCards
    }
}
</script>