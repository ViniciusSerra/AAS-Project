<template>
    <div>
        <v-row>
            <v-col class="d-flex" style="background-color: #44b8d7;">
                <loginModal></loginModal>
                <v-space></v-space>
            </v-col>
            <v-col v-if="isDesktop" class="desktop-only d-flex  align-center">
                
                    <v-img src="https://ik.imagekit.io/nck7tb9bc/AAS/img-woman-pc.gif?updatedAt=1687022292515"></v-img>
               
            </v-col>
        </v-row>
    </div>
</template>
<script>
import loginModal from './loginModal.vue';
export default {
    name: 'loginComponent',
    components: {
        loginModal
    },
    data() {
        return {
            isDesktop: true
        }
    },

    methods: {
        showDesktop: function () {
            if (window.innerWidth >= 720) {
                this.isDesktop = true
            }
            else {
                this.isDesktop = false
            }
        }

    },

    mounted() {
        this.showDesktop();
        window.addEventListener('resize', this.showDesktop);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.showDesktop);
    }

}
</script>