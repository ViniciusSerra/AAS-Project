<template>
    <Header />
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
