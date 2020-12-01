<template>
  <div>
      <div class="wrap">
        <div class="text">
             <h2>About</h2>
          <p>Hello there :) <br>and <br> welcome to my website <br>
          I'm Yume a web developper aprentice who have a passoin for the music/the animation
          and art :)<br>
          and i created this website for us :) <br>
          yeah for us,for everyone who have a passion or  a talent in one of the categorie above <br>
          or in search of inspiration <br>
          if you wanna know more about this website please click here :
          </p>
          <router-link to="about"><button>More</button></router-link>
        </div>
          
      </div>
  </div>
</template>

<script>
export default {
name:"about"

}
</script>

<style scoped>
.wrap{
  background: url("../assets/about.jpg") no-repeat 50% 50%;
  background-size: cover;
  width: 100%;
  height: 40vh;
}
.wrap img{
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.text{
  position: absolute;
  color: #fff;
  text-align: center;
  width: 100%;
}
button{
  width: 10%;;
    border-radius: 9px;
    margin-top: 39px;
    
}
button:hover{
  background-color: #000;
  color: #fff;
}


</style>