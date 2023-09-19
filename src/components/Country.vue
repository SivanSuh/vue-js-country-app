<template>
    <router-link v-bind:to="`country/${country.name.common}`" class="countryItem">
        <img :src="country.flags.png" :alt="country.name.common" class="image" >
        <h3>{{ country.name.common }}</h3>
    </router-link>
</template>

<script>
export default {
    name:"CountryComponent",
    props:["country"]
}
</script>

<style>
.image{
    height: 150px;
    width:100%;
    object-fit: cover;
}
.countryItem{
    border:0.25px solid;
    transition: transform 0.3s ease;
}
.countryItem:hover{
    transform: scale(1.25);
}
</style>