<template>
  <div class="home">
    <HelloWorld />
</div>
</template>

<style>
.home {
  margin: 20px auto;
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
