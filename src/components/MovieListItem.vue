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
      <td data-label="Add to Favorites"><button @click="nominateMovie">Nominate</button></td>
    </tr>
  
  </tbody>
<!-- </table> -->

</template>

<script>
export default {
    name: "MovieListItem",
    props: ['movies'],
    computed: {
        posterChild() {
        return this.movies.Type === "movie" ? this.movies.Poster : null
            
        }
    },
    methods: {
        nominateMovie() {
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