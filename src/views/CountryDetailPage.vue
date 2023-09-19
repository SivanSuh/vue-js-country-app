<template>
    <div class="alan">
        <p>{{ $route.params.name }}</p>
        <br />
        <CountryDetail :data="data[0]" />

    </div>
</template>

<script>
import CountryDetail from '@/components/CountryDetail.vue';

export default {
    name:"CountryDetailPage",
    data(){
        return {
            data:null
        }
    },
    components:{
        CountryDetail
    },
    methods:{
        async fetDetail(){
            const response = await fetch(`https://restcountries.com/v3.1/name/${this.$route.params.name}`);
            this.data = await response.json()
            console.log("data",this.data)
        }
    },
    mounted(){
        this.fetDetail();
    }
  
}
</script>

<style>
.alan{
    margin: 20px auto;
}
</style>