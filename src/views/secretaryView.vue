<template>
    <Header :secretary="true" :userType="user" />
    <v-main>
        <secretaryComponent/>
    </v-main>
    <div align="center">
        <rodape />
    </div>
</template>
<script>
import Header from '@/layouts/header.vue';
import rodape from '@/layouts/footer.vue'
import secretaryComponent from '@/components/secretaryPainel/secretaryComponent.vue';
export default {
    name: 'secretaryView',
    components: {
        Header,
        rodape,
        secretaryComponent
    },
    data() {
        return {
            user:'Secretária'
        }
    }

}

</script>