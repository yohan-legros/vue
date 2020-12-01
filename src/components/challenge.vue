<template>
  <div class="test">
      <navbar/>
      <div class="header">
          <img src="../assets/challenge.gif" alt="">
      </div>
      <div class="chal">
          <h2>CHALLENGE/EVENT</h2>
        <p>
            on this page there will be every 2 month an event/challenge in every category will <br> take place. <br>
            in this event there will  a ranking ,and, the top 3 users will get prize <br>
            and will be display in the Hall Of Fame :) <br>
            So if you want to get more visibility on the website you know what you need to do :p
        </p>
         <h2>Next Challenge</h2>
      </div>
      
      <div class="card">
          <b-card bg-variant="dark"  text-variant="white" style="max-width: 20rem;"  class="carte mb-2" v-for="challenge in challenges" :key="challenge.id" >
              <b-card-title>
                    {{challenge.titre}}
                </b-card-title>
                <b-card-text class="t">
                    <p>objectif</p>
                    {{challenge.objectif}}
                  
                </b-card-text >
                <b-card-text class="t">
                    <p>Prix</p>
                    {{challenge.Prize}}
                </b-card-text>
                <b-card-text class="t">
                    {{challenge.reward}}
                    <p>point</p>
                </b-card-text>
               <b-button href="/condition" class="co">postuler</b-button>
            </b-card>
      </div>
      <fouter/>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import fouter from "../components/fouter.vue";

export default {
name:"Challenge",
 components: {
    navbar,fouter
    },
    created() {
    this.axios
      .get("http://localhost:3000/challenge/all")
      .then((res) => {
        console.log(res);
        this.challenges= res.data.challenge;
      })
      .catch((err) => {
        alert(err);
      });

  },
   data() {
    return {
      challenges: {},

    };
  },
}
</script>

<style scoped>
.header{
    background-size: cover;
    
}
.header img{
    width: 100%;
    height: 60vh;
}
h2{
    color: #e01f7a;
}
.chal{
    text-align: center;
    color:#fff;
}
.chal p{
    font-size: 20px;
}
.test{
    background-color: #000;
}
.card{
    display: flex;
    flex-direction: row !important;
    justify-content: space-around !important;
    text-align: center;
    background-color: #000;
}
.co{
    background-color: #e01f7a;
}


</style>