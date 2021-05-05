<template>
<div class="container">
    <Header></Header>
  <SearchBar @termChange="onTermChange"></SearchBar>
    <MovieList @nominateMovie="nominateMovie" :movies="movies" ></MovieList>
  </div>
</template>

<script>
import axios from "axios"
import SearchBar from "./components/SearchBar"
import Header from "./components/Header"
import MovieList from "./components/MovieList"

export default {
    name: "App",
    components: {SearchBar, Header, MovieList},
    data() {
        return {movies: [], searchTerm: '', inputChange: null, spinner: "ui icon input loading" }

    },
    methods: {
        onTermChange: async function getMovies(searchTerm) {
            this.inputChange && clearTimeout(this.inputChange);
            this.inputChange = setTimeout(async () => {
            try {
            const res = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=dd33970d&type=movie&y=&plot=short&`)
            console.log(res);
            this.movies = res.data.Search
            console.log("state", this.movies)
        } catch(err) {console.log("error!",err)} },1000)},

        nominateMovie: function(movie) {
            console.log(movie)
            
        },
        falseLoad: function() {

        }
    }

}
</script>

<style>

</style>