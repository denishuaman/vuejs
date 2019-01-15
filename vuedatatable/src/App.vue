<template>
  <div id="app">
    <VueDataTable></VueDataTable>
    <!-- <VueDataTable2></VueDataTable2> -->
  </div>
</template>

<script>
  import VueDataTable from "./components/VueDataTable.vue";
  // import VueDataTable2 from "./components/VueDataTable2.vue";
  
  export default {
    name: 'app',
    components: {
      VueDataTable
      // VueDataTable2
    }
  }
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
