<template>
  <div class="hello">
    <input class="input" type="text" placeholder="Aramak istediginiz ülkeyi giriniz..." v-model="message">
   
    <br />
    <div v-if="!data">Loading</div>
 
    <div  class="country">

      <CountryComponent :country="datas" v-for="datas in filteredList" :key="datas.id"/>
    </div>

   
  </div>
</template>

<script>
import CountryComponent from './Country.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components:{
    CountryComponent
  },
  data(){
    return {
      data:["naber"],
      message:"",
    }
  },
  methods:{
    async fetchData(){
      const response = await fetch("https://restcountries.com/v3.1/all");
      this.data = await response.json();
    }
  }
    ,
  computed:{
   filteredList(){
      return this.data.filter((item) => {
        return item.name.common.toLowerCase().includes(this.message.toLowerCase())
      })
    }
  },
  created(){
    this.$store.dispatch("fetchCountry")
  },
  mounted(){
    this.fetchData();
    //this.$store.dispatch("fetchData")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.input {
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: 0.5px solid #E3E3E3;
  width:75%;
  max-width: 1280px;
}
.country{
  max-width: 1280px;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 50px;
  margin: 30px auto;
}
</style>
