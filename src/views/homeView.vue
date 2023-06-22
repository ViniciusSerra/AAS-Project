<template>
    <Header />
    <v-main>

        <Body />
    </v-main>
    <div align="center">
        <rodape />
    </div>
</template>
<script>
import Header from '@/layouts/header.vue'
import Body from '@/layouts/body.vue'
import rodape from '@/layouts/footer.vue'
export default {
    name: 'homeView',
    components: {
        Header,
        Body,
        rodape
    }
}
</script>
