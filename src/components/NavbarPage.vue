<template>
    <nav class="navbar">
        
        <router-link to="/" class="title"><h1>Navbar</h1></router-link>
        <div class="linkContainer">
            <LinkName :links="link" v-for="link in items" :key="link.title" />
        </div>
    </nav>
</template>

<script>
import LinkName from './Links.vue';

export default {
  name: 'NavbarPage',
  components:{
    LinkName,
  },
  data(){
   return {
    items:[
  {
    path: "/",
    title: "country",
  }
]
   }
  }
};
</script>

<style scoped>
.title{
    color:white;
    text-decoration: none;
}
.linkContainer{
    display: flex;
    gap: 10px;
}
nav{
    padding: 15px;
}
.navbar {
    background-color: #435B71;
    color:white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0px;
}
</style>
