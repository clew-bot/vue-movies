<template>
<div>
  <div id="myTable">
      <table class="ui celled table">
        <thead>
    <tr><th id="name">Name</th>
    <th id="year">Year of Release</th>
    <th id="type">Type</th>
        <th id="favorites">Nominate?</th>
  </tr></thead>
      <MovieListItem 
      v-for="movie in movies"
    
      :key="movie.imdbID"
      :movies="movie"
      @nominateMovie="movieSelect"
       ></MovieListItem>
      </table>
  </div>

<div v-if="overFive" >
    <div>
    <h1 id="goat">The Greatest of All Time!</h1>
 
    <!-- <p class="center">Thanks for Voting! This App was brought to you by Chad Lew. Made with Vue :)</p> -->
    <div id="myButton">
    <sui-popup flowing hoverable>
      <sui-grid centered divided :columns="3">
        <sui-grid-column text-align="center">
          <h4 is="sui-header">Github</h4>
          <p>My Personal Projects :)</p>
          <sui-button><a href="https://github.com/clew-bot" target="_blank"><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="35" height="25"><path d="M5.65 12.477a.5.5 0 10-.3-.954l.3.954zm-3.648-2.96l-.484-.128-.254.968.484.127.254-.968zM9 14.5v.5h1v-.5H9zm.063-4.813l-.054-.497a.5.5 0 00-.299.852l.352-.354zM12.5 5.913h.5V5.91l-.5.002zm-.833-2.007l-.466-.18a.5.5 0 00.112.533l.354-.353zm-.05-2.017l.456-.204a.5.5 0 00-.319-.276l-.137.48zm-2.173.792l-.126.484a.5.5 0 00.398-.064l-.272-.42zm-3.888 0l-.272.42a.5.5 0 00.398.064l-.126-.484zM3.383 1.89l-.137-.48a.5.5 0 00-.32.276l.457.204zm-.05 2.017l.354.353a.5.5 0 00.112-.534l-.466.181zM2.5 5.93H3v-.002l-.5.002zm3.438 3.758l.352.355a.5.5 0 00-.293-.851l-.06.496zM5.5 11H6l-.001-.037L5.5 11zM5 14.5v.5h1v-.5H5zm.35-2.977c-.603.19-.986.169-1.24.085-.251-.083-.444-.25-.629-.49a4.8 4.8 0 01-.27-.402c-.085-.139-.182-.302-.28-.447-.191-.281-.473-.633-.929-.753l-.254.968c.08.02.184.095.355.346.082.122.16.252.258.412.094.152.202.32.327.484.253.33.598.663 1.11.832.51.168 1.116.15 1.852-.081l-.3-.954zm4.65-.585c0-.318-.014-.608-.104-.878-.096-.288-.262-.51-.481-.727l-.705.71c.155.153.208.245.237.333.035.105.053.254.053.562h1zm-.884-.753c.903-.097 1.888-.325 2.647-.982.78-.675 1.237-1.729 1.237-3.29h-1c0 1.359-.39 2.1-.892 2.534-.524.454-1.258.653-2.099.743l.107.995zM13 5.91a3.354 3.354 0 00-.98-2.358l-.707.706c.438.44.685 1.034.687 1.655l1-.003zm-.867-1.824c.15-.384.22-.794.21-1.207l-1 .025a2.12 2.12 0 01-.142.82l.932.362zm.21-1.207a3.119 3.119 0 00-.27-1.195l-.913.408c.115.256.177.532.184.812l1-.025zm-.726-.99c.137-.481.137-.482.136-.482h-.003l-.004-.002a.462.462 0 00-.03-.007 1.261 1.261 0 00-.212-.024 2.172 2.172 0 00-.51.054c-.425.091-1.024.317-1.82.832l.542.84c.719-.464 1.206-.634 1.488-.694a1.2 1.2 0 01.306-.03l-.008-.001a.278.278 0 01-.01-.002l-.006-.002h-.003l-.002-.001c-.001 0-.002 0 .136-.482zm-2.047.307a8.209 8.209 0 00-4.14 0l.252.968a7.209 7.209 0 013.636 0l.252-.968zm-3.743.064c-.797-.514-1.397-.74-1.822-.83a2.17 2.17 0 00-.51-.053 1.259 1.259 0 00-.241.03l-.004.002h-.003l.136.481.137.481h-.001l-.002.001-.003.001a.327.327 0 01-.016.004l-.008.001h.008a1.19 1.19 0 01.298.03c.282.06.769.23 1.488.694l.543-.84zm-2.9-.576a3.12 3.12 0 00-.27 1.195l1 .025a2.09 2.09 0 01.183-.812l-.913-.408zm-.27 1.195c-.01.413.06.823.21 1.207l.932-.362a2.12 2.12 0 01-.143-.82l-1-.025zm.322.673a3.354 3.354 0 00-.726 1.091l.924.38c.118-.285.292-.545.51-.765l-.708-.706zm-.726 1.091A3.354 3.354 0 002 5.93l1-.003c0-.31.06-.616.177-.902l-.924-.38zM2 5.93c0 1.553.458 2.597 1.239 3.268.757.65 1.74.88 2.64.987l.118-.993C5.15 9.09 4.416 8.89 3.89 8.438 3.388 8.007 3 7.276 3 5.928H2zm3.585 3.404c-.5.498-.629 1.09-.584 1.704L6 10.963c-.03-.408.052-.683.291-.921l-.705-.709zM5 11v3.5h1V11H5zm5 3.5V13H9v1.5h1zm0-1.5v-2.063H9V13h1z" fill="currentColor"></path></svg></a></sui-button>
        </sui-grid-column>
        <sui-grid-column text-align="center">
          <h4 is="sui-header">LinkedIn</h4>
          <p>Usually always on here.</p>
          <sui-button><a href="https://www.linkedin.com/in/chad-lew-7586711a0/" target="_blank"><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="35" height="25"><path d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z" stroke="currentColor"></path></svg></a></sui-button>
        </sui-grid-column>
        <sui-grid-column text-align="center">
          <h4 is="sui-header">Made with Vue</h4>
          <p>Styling w/Semantic-UI</p>
          <sui-button><a href="https://vuejs.org/" target="_blank"><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="35" height="25"><path d="M7.5 13.5l-.432.252a.5.5 0 00.864 0L7.5 13.5zm4-12l.434.248A.5.5 0 0011.5 1v.5zm-4 7l-.434.248a.5.5 0 00.868 0L7.5 8.5zm-4-7V1a.5.5 0 00-.434.748L3.5 1.5zm3 0l.447-.224L6.81 1H6.5v.5zm1 2l-.447.224a.5.5 0 00.894 0L7.5 3.5zm1-2V1h-.309l-.138.276.447.224zm-8.432.252l7 12 .864-.504-7-12-.864.504zm7.864 12l7-12-.864-.504-7 12 .864.504zm3.134-12.5l-4 7 .868.496 4-7-.868-.496zm-3.132 7l-4-7-.868.496 4 7 .868-.496zM3.5 2h3V1h-3v1zm2.553-.276l1 2 .894-.448-1-2-.894.448zm1.894 2l1-2-.894-.448-1 2 .894.448zM8.5 2h3V1h-3v1z" fill="currentColor"></path></svg></a></sui-button>
        </sui-grid-column>
      </sui-grid>
      <sui-button slot="trigger">Thanks For Voting!</sui-button>
    </sui-popup>
  </div>
    </div>
    <div class="imgs">
<div id="allFive"  v-for="nominee in nominees" :key="nominee.imdbID">
    <h1 id="nominees"><span>{{nominee.Title}}</span></h1>
    <img class="theImage" :src="nominee.Poster" alt="">
</div>
</div>
</div>
<div v-else >
<h1  id="nomineess">Nominees</h1>

  <div id="myTable" style="margin-bottom:200px">
   <table class="ui celled table">
  <thead>
    <tr><th>The Greatest of All Time </th>
   
    <th>Year of Release</th>
    <th>Type</th>
        <th>Remove</th>
  </tr></thead>
  
 

  <NominationList
  v-bind:nominees="nominee"
  v-for="nominee in nominees" :key="nominee.imdbID"
  @removeMovie="removeTheMovie"></NominationList>
       </table>
       </div>
</div>
  </div>
</template>

<script>
import MovieListItem from "./MovieListItem"
import NominationList from "./NominationList"
export default {
    name: 'MovieList',
    data() {
        return {getMovie:[], nominees: [], overFive: false}
    },
    components: {MovieListItem, NominationList},
    props: {
        movies: Array
    },
    emits: {btnDisabled: true},
    methods: {
        movieSelect: function(movie) {
           //move is title name
    if(this.nominees.length >= 5 && this.nominees.length === 5) {
        console.log(this.nominees)
        this.overFive = true
        alert("That's already 5. Here are your top picks. Thanks for voting!")
        return null
    }
    this.getMovie = movie;

    this.nominees.push(this.getMovie)
    console.log("this",this.nominees)
    
    // window.localStorage.setItem("favorites", this.nominees)
    this.$emit("nominees", movie)
            },
            removeTheMovie: function(e) {
                console.log(e)
                this.btnDisabled = false;
                this.nominees.pop();
            },
        }
    }
</script>

<style scoped>
#myTable {
    border: solid 2px pink;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 50px;
}
#name {
    color: green;
}
#year{
    color: purple;
}
#type {
    color: orangered
}
#favorites {
    color: dodgerblue
}
#nominees {
    text-align:center;
    color: rgb(179, 131, 186);
    border: dashed 2px pink;
    height: 150px;
     
  line-height: 130px;
  
  
    
}
#nomineess{
    margin-top: 20px;
    text-align:center;
    color: rgb(36, 110, 155);
    
}
#goat {
    margin-top: 20px;
      text-align:center;
    color: rgb(21, 109, 31);
  
}
#allFive {
     flex: 33.33%;
  padding: 5px;
}
#myButton {
    display: flex;
    justify-content: center;
}
.imgs {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: wrap;
}
@media screen and (max-width: 800px) {
  .imgs {
    flex-direction: column;
    align-items: center;
    max-width:400px
  }
}

.theImage {
    border: solid 2px black;
    border-radius: 10px;
    max-height: 300px;
    align-items: center;
    
}
.center {
    text-align: center;
}
span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
</style>