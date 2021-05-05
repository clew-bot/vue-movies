<template>
 
<!-- <table class="ui celled table">
  <thead>
    <tr>
        <th><img :src="posterChild" alt="movie poster" /></th>
        <th class="center aligned">Name: </th>
    <th>Year of Release: </th>
    <th>Type: </th>
    <th> <button @click="nominateMovie">Add to Favorites</button></th>
  </tr></thead>
</table> -->


  <tbody>
    <tr>
      <td data-label="Name">{{movies.Title}}</td>
      <td data-label="Year of Release">{{movies.Year}}</td>
      <td data-label="Type">{{movies.Type.charAt(0).toUpperCase() + movies.Type.slice(1)}}</td>
      <td data-label="Add to Favorites"><button :disabled="btnDisabled" @click="nominateMovie" class="ui labeled button" tabindex="0">
  <div class="ui red button" data-content="Pick me!">
    <i class="heart icon" ></i> Nominate
    <a class="ui basic red left pointing label">
    Let's Win!
  </a>
  </div>
  
</button></td>
    </tr>
  
  </tbody>
<!-- </table> -->

</template>

<script>
export default {
    name: "MovieListItem",
    data() {
      return {btnDisabled: false}
    },
    props: ['movies'],
    computed: {
        posterChild() {
        return this.movies.Type === "movie" ? this.movies.Poster : null
            
        }
    },
    methods: {
        nominateMovie() { 
     
            this.btnDisabled = true;
            this.$emit("btnDisabled", this.btnDisabled)
            this.$emit("nominateMovie", this.movies)
        },
        
    }
}
</script>

<style scoped>
/* 
img {
    width: 20px;
}
img:hover {
    width: 200px;
}
.ui {
    margin-left: 100px;
 
} */

</style>