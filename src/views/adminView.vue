<template>
        <Header :admin="true" :userType="user" />
        <v-main class="bg-blue-grey-lighten-5 ">
            <AdminComponent/>
        </v-main>
        <div align="center" class="bg-blue-grey-lighten-5">
            <rodape  />
        </div>
</template>
<script>
import Header from '@/layouts/header.vue'
import AdminComponent from '@/components/adminPainel/adminComponent.vue';
import rodape from '@/layouts/footer.vue'
export default {
    name: "adminView",
    components: {
        Header,
        AdminComponent,
        rodape
    },
    data() {
        return {
            user:'Painel do Admin'
        }
    }
}
</script>
