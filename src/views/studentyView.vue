<template>
    <Header :userType="user"    />
    <v-main>
        <studentyComponent/>
    </v-main>
    <div align="center">
        <rodape/>
    </div>
</template>
<script>
import Header from '@/layouts/header.vue';
import studentyComponent from '@/components/studentyPainel/studentyComponent.vue';
import rodape from '@/layouts/footer.vue';
export default{
    name:'studentyView',
    components:{
        Header,
        studentyComponent,
        rodape
    },
    data(){
        return {
          user:'Estudante'  
        }
    },
    methods:{
    
    }
}

</script>