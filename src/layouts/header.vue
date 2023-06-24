
<template>
    <menuExtend />
</template>

<script>
import rodape from './footer.vue';
import menuExtend from './menu.vue';

export default {
    name: 'Header',
    data() {
        return {
            isOpen: false
        }
    },
    components: {
        menuExtend,
        rodape
    },
    methods: {
        openMenu: function () {
            this.isOpen = true
        }
    }
}
</script>

<style>
.header {
    grid-area: headers;
    height: 20%;
}
</style>