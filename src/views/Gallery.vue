<template>
<div class="test"> 
    <navbar/>
    <div class="header">
        <h1> <em>Gallery</em> </h1>
    </div>
    <gall/>

    <fouter/>

</div>
  
</template>

<script>
import navbar from "../components/navbar.vue";
import fouter from "../components/fouter.vue";
import gall from "../components/gall.vue";

export default {
    name:"Gallery",
     components: {
    navbar,fouter,gall
    }
    

}
</script>

<style scoped>
*{
    margin:0;
    padding: 0;
}
.header{
    background: url("../assets/gallery.jpg") no-repeat 50% 50%;
    background-size: cover;
    width: 100%;
    height: 80vh;
}
.header h1{
    position: absolute;
    bottom: 18%;
    left: 48%;
    transform: translate(-50%,-50%);
    font-size: 70px;
    width: 100%;
    text-align: center;
}
.test{
    background-color: #000;
}
</style>