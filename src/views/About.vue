<template>
  <div class="aboutp">
    <navbar/>
    <div class="header">
      <div class="titre">
        <h1>About Us</h1>
      </div>
    </div>
    <div class="sub">
      <h2>About Me</h2>
    </div>

    <div class="me">
     <img src="../assets/pp.jpg" alt="">
      <p> hello :)<br>
      if you are here it’s because you wanna know more about this website or maybe who i am?:p<br>
      Alright so let’s get started!!!<br>
      My name is yohan but you can call me Yume like everyone else :p , 
      <br> i’m a web developper apprentice who have passion for any art,but i’m also a beatmaker who love every types of music :)
      </p>
    </div>
    <div class="sub">
      <h2>what about this website?</h2>
    </div>
      <p>oh yeah <br>
i created this website to help every artist who have a passion ,or maybe a <br> hobbit,for every art,every animation or music ,and who want to keep <br>
 growing,to, help them develop their self by sharing/selling(if they want to) <br>
  their work to other artist or people that will surely be interested by their work. <br>

what i mean by this? <br>
this website is not only for the artirst , this website is for everyone who have <br>
 one thing in common and that there passion for their work or maybe i can say <br>
  their domain of work,and in this type of people ,we have company,maybe small <br>
   bussinnes or even 
highter who need people like that, <br>
and <br>

that why, one of my goal is too help them found <br>
what they are looking for by giving them the chance to post <br> some job opportunity on this website in a pleasant way :)  that you will see later :). <br>
I hope this website will develop/grow in a beautful community of artist or people of every domain like digital art, art , animation ,music etc that can help each other improve and grow further in  their passion.
</p>
<div class="sub">
      <h2>You want to help company recruit new talent but how will you do that?</h2>
    </div>
    <p>
      yeah  one of my goal is to help them find talent on this website,cause i believe that <br> everyone here have at Yume-Lody have a potential that need to be recognize but how <br> will i do that?<br>
hehe i created this website to be simple and fun,like a «mini game» <br>
what i mean by this? <br>
on this website you have functionalities like the challenge or the quest section that give <br>
 you point or prizes when you complete or win them and you have hidden functionality that will give you adchivement :D, <br>

whith this point you can unlock some advantages or benefits on this website  :) that you can’t overlook,
and <br>
to help this company found talent i will give them a large amount of «art point» when <br>
 they create their company account, that they can use to create «epic quest» :) and that <br> will be their «job opportunity». <br>
in this «quest» they can define a prize , <br>

a difficulty (like a requirement the user will need to complete before doing it), <br>
 the content (like what the user will need to do in this quest to complete it and have a chance to win the prize) <br>
and a due date. <br>
whith this they just need to chose the winner at the end that will have a chance to be their new member :).
    </p>
    <div class="sub">
      <h2>end</h2>
    </div>
    <p>
      that all i can say for now :), <br>
 i hope you will  enjoy this website like me <br>
and <br>
help it grow in  a beautiful community that everyone will be proud of :) <br>
and <br>
if you have any advice to give me to make it better i will always listen to the community so don’t hesitate :).
    </p>
    
    
    <fouter/>

  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import fouter from "../components/fouter.vue";

export default {
 components: {
    navbar,fouter
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.header{
  background: url("../assets/bird2.jpg") no-repeat 50% 50%;
  background-size: cover;
  height: 50vh;
}

.titre{
    position: absolute;
    top: 31%;
    left: 48%;
    transform: translate(-50%,-50%);
    font-size: 30px;
    width: 100%;
    text-align: center;
}
.titre h1{
   transform: rotate(-10deg);
}
.sub{
  text-align: center;
  background-color: #fff568;
  color: #000;
}
.aboutp{
  background-color: #000;
}
p{
  color:#fff;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
}

.me{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
img{
  margin-bottom: 10px;
  width: 250px;
  height: 300px;
}

</style>