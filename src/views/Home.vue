<template>
  <div class="home">
   
    <div class="header">
      <div class="titre">
       <h1>Welcome to Yume-LODY</h1>
      </div>
    </div>
    <abonnement/>

  
   
  </div>
</template>

<script>
// @ is an alias to /src
import abonnement from '../components/abonnement.vue'

export default {
  name: 'Home',
  components: {
    abonnement,
    
  }
}
</script>
<style scoped>
.header{
  background: url("../assets/violon.png") no-repeat 50% 50%;
  background-size: cover;
    width: 100%;
    height: 100vh;
  background-attachment: fixed;
}

.titre{
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 30px;
    width: 100%;
    text-align: center;
}
.fouter{
  position: relative;
}
</style>
