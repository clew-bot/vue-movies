<template>
<div>
  <div id="myTable">
      <table class="ui celled table">
        <thead>
    <tr><th>Name</th>
    <th>Year of Release</th>
    <th>Type</th>
        <th>Add to Favorites</th>
  </tr></thead>
      <MovieListItem 
      v-for="movie in movies"
    
      :key="movie.imdbID"
      :movies="movie"
      @nominateMovie="movieSelect" ></MovieListItem>
      </table>
  </div>


  
<h1>Nominees</h1>
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
</template>

<script>
import MovieListItem from "./MovieListItem"
import NominationList from "./NominationList"
export default {
    name: 'MovieList',
    data() {
        return {getMovie:[], nominees: []}
    },
    components: {MovieListItem, NominationList},
    props: {
        movies: Array
    },
    methods: {
        movieSelect: function(movie) {
           //move is title name
    if(this.nominees.length >= 5) {
        return null
    }
    this.getMovie = movie;
    this.nominees.push(this.getMovie)
    this.$emit("nominees", movie)


            },
            removeTheMovie: function() {
                console.log("get ready to say goodbye")
                this.nominees.pop();
            }
            

        }
    }

</script>

<style scoped>
#myTable {
    border: solid 2px pink
}
</style>