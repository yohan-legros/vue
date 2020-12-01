<template>
  <div class="test">
      <h2>Abonnements</h2>
      <div class="card">
          <b-card bg-variant="dark"  text-variant="white" style="max-width: 20rem;"  class="carte mb-2" v-for="abonnement in abonnements" :key="abonnement.id">
              <b-card-title>
                    {{abonnement.nom}}
                </b-card-title>
                <b-card-text>
                    {{abonnement.price}}
                    <p>/mois</p>
                </b-card-text>
                <b-card-text>
                    {{abonnement.description}}
                </b-card-text>
               <b-button href="/panier" variant="primary">Acheter</b-button>
            </b-card>

           
      </div>
  </div>
</template>

<script>
export default {
    name:"abonnement",
    created() {
    this.axios
      .get("http://localhost:3000/abonnement/all")
      .then((res) => {
        console.log(res);
        this.abonnements= res.data.abonnement;
      })
      .catch((err) => {
        alert(err);
      });
  },
   data() {
    return {
      abonnements: {},

    };
  },
}
</script>

<style scoped>
.card{
    background-color: gray;
        flex-flow: wrap !important;
    justify-content: space-around !important;
    margin-top:30px;
}
.test{
    background-color: gray;
    color: black;
    text-align: center;
}  

.carte{
    width: 20rem !important;
}
</style>