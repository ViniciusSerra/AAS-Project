<template>
    <div class="full-width-container">
        <v-row class="full-height">
            <v-col cols="6" class="d-flex align-center pb-16 ml-0" style="background-color: #44b8d7;">
            <loginModal></loginModal>
        </v-col>
            <v-col cols="6" class="d-flex align-center">
                <div>
                    <v-img class="full-width"
                        src="https://ik.imagekit.io/nck7tb9bc/AAS/img-woman-pc.gif?updatedAt=1687022292515"></v-img>
                </div>
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
    }

}
</script>
<style>
.full-width-container {
    width: 100%;
}

.full-height {
    height: 100vh;
}

.full-width {
    width: 100%;
}
</style>
