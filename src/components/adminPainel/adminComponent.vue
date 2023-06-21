<template>
    <v-row >
   <ValuesCards/>
   </v-row>
   
</template>
<script>
import ValuesCards from './valuesCards.vue';

export default {
    name: 'adminComponent',
    components: {
        ValuesCards
    }
}
</script>