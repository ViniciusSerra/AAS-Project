<template>
    <v-row no-gutters class="h-screen bg-blue-grey-lighten-5" >
        <v-col cols="2" >
            <userBar/>
        </v-col>
        <v-col class="bg-blue-grey-lighten-5" cols="13">
            <menuBar/>
        </v-col>
    </v-row>
</template>
<script>
import userBar from "./UserBarcomponent.vue"
import menuBar from "./menuBar.vue"
export default {
    name: 'adminComponent',
    components: {
        menuBar,
        userBar
    }
}
</script>