<template>
    <Header :teacher="true" :userType="user" />
    <v-main class="bg-transparent">
        <teatcherComponet />
    </v-main>
    <div align="center">
        <rodape />
    </div>
</template>
<script>
import Header from '@/layouts/header.vue';
import rodape from '@/layouts/footer.vue';
import teatcherComponet from '@/components/teatcherPainel/teatcherComponet.vue';
export default {
    name: "teacherView",
    components: {
        Header,
        rodape,
        teatcherComponet
    },
    data(){
        return{
            user:'Professor'
        }
    }
}
</script>