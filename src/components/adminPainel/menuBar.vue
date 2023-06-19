<template>
    <v-card class="color-blue-grey-lighten-4">
        <v-toolbar extended floating class="bg-white justify-center">
             <h1 class="ml-8 mb-3 mr-11 mt-12 text-light-blue-accent-3">Logo</h1> 
            <v-spacer></v-spacer>
            <h2  class="ml- mb-3 mr-11 mt-12 text-light-blue-accent-3" >Nome do Usuário</h2>
            <v-btn icon  class="ml- mb-3 mr-11 mt-5" >
                            <v-icon color="light-blue-accent-3" size="80">mdi-account-circle</v-icon>
                        </v-btn>
        </v-toolbar>
    </v-card>
    <valuesCards/>
</template>
<script>
import valuesCards from './valuesCards.vue';
export default {
    name: 'menuBar',
    components:{
    valuesCards
    }
}
</script>