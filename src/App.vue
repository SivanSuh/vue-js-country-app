<template>
  <div id="app">
    <NavbarPage />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavbarPage from '@/components/NavbarPage.vue';
export default {
  components:{
    NavbarPage,
}
}
</script>
<style>
* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none;
}

</style>
