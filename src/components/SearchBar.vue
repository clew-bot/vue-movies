<template>
  <div 
  :class='spinner' >
  <input type="text" placeholder="Search..." @input="onInput">
  <i class="search icon"></i>
</div>
</template>

<script>




export default {
    name: "SearchBar",
    props: ['spinner'],
    data() {
        return {}
    },
methods: {
    spinnyLoad: function() {
        
    },
    onInput: function(e) {
        this.$emit("termChange", e.target.value);
        this.$emit("isLoading")
        
    }
},
computed: {
   
}
}
</script>

<style scoped>

</style>