<template>
   <div>
    <div class="capital">
        <b>Capital:</b>
        <p style="margin-left: 10px;">{{ data.capital }}</p>
    </div>
    <br />
    <div>
        <img :src="data.flags.png" :alt="data.flags.alt" >
    </div>
   </div>
</template>


<script>
export default {
    name:"CountryDetail",
    props:["data"]
 
}
</script>

<style>
.capital {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>