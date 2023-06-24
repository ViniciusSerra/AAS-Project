<template>
    <Header />
    <v-main>
    </v-main>
    <div align="center">
        <rodape />
    </div>
</template>
<script>
import Header from '@/layouts/header.vue'
import rodape from '@/layouts/footer.vue'
export default {
    name: 'homeView',
    components: {
        Header,
        rodape
    }
}
</script>
