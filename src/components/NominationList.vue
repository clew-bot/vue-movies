<template>

  <tbody >
    <tr>
      <td data-label="Name">{{nominees.Title}}</td>
      <td data-label="Year of Release">{{nominees.Year}}</td>
      <td data-label="Type">{{nominees.Type.charAt(0).toUpperCase() + nominees.Type.slice(1)}}</td>
      <td data-label="Add to Favorites"><button @click="removeMovie">Remove</button></td>
    </tr>
  
  </tbody>

   
</template>

<script>
export default {
    name: "NominationList",
    data(){
        return{
            
            // title: nominee.Title,
            // year: nominee.Year,
            // type: nominee.Type,
        }
    },
    props: ['nominees'],

    // computed: appendMovie: function() {
    //     return 

    // },
    methods: {
        removeMovie: function() {
           this.$emit("removeMovie", this.nominees);
        // console.log(this.nominees)
    }
    },
}
</script>

<style>

</style>