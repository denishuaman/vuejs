<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated"></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "dgha",
        password: "123456"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      console.log("Usuario no autenticado");
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      console.log("Cambiando estado -> "+status);
      this.authenticated = status;
    },
    logout() {
      console.log("Cerrando sesión");
      this.authenticated = false;
    }
  }
};
</script>
<style>
body {
  background-color: #f0f0f0;
}
h1 {
  padding: 0;
  margin-top: 0;
}
#app {
  width: 1024px;
  margin: auto;
}
</style>
