<template>
    <Header :responsible="true" :userType="user" />
    <v-main>
        <responsaibleComponent/>
    </v-main>
    <div align="center">
        <rodape/>
    </div>
</template>
<script>
import Header from '@/layouts/header.vue';
import responsaibleComponent from '@/components/responsaiblePainel/responsaibleComponent.vue';
import rodape from '@/layouts/footer.vue'
export default {
    name: 'responsaibleView',
    components: {
        responsaibleComponent,
        Header,
        rodape
    },
    data() {
        return {
            user:'Responsável'
        }
    }
}

</script>