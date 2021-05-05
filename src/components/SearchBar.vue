<template>
    <div class="ui one column stackable center aligned page grid">
        <div class="column twelve wide">
            <div class="ui input focus">
  <input type="text" placeholder="Search..." @input="onInput">
  </div>
    </div>
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
}
}
</script>

<style scoped>
    .focus { 
       display: flex;
       justify-content: center;  
    }
</style>