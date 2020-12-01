<template>
  <div class="home">
    <navbar/>
    <div class="header">
      <div class="titre">
       <h1>Welcome to Yume-LODY</h1>
      </div>
    </div>
    <about/>
    <week/>
    <abonnement/>
    <newsletter/>
    <fouter/>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar.vue";
import about from "../components/about.vue";
import week from "../components/week.vue";
import abonnement from "../components/abonnement.vue";
import newsletter from "../components/newsletter.vue";
import fouter from "../components/fouter.vue";

export default {
  name: 'Home',
  components: {
    navbar,about,week,abonnement,newsletter,fouter
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
