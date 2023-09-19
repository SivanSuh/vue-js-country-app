<template>
    <div class="container">
    <router-link class="links" v-bind:to="links.path">{{ links.title }}</router-link> 
    <!-- <router-view/> -->
    </div>
</template>

<style>
.container{
    display: flex;
    gap:10px;
}
.links{
    color:#39A576;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    max-width: fit-content;
}
</style>
<script>
export default {
    name:"LinkName",
    props:["links"]
}
</script>