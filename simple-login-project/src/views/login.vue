<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" class="form-control" name="username" v-model="input.username" placeholder="Usuario" autocomplete="off">
        <input type="password" class="form-control" name="password" v-model="input.password" placeholder="Contraseña" autocomplete="off">
        <hr>
        <div align="center">
            <button type="button" v-on:click="login()" class="btn btn-primary">Iniciar sesión</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if(this.input.username!="" && this.input.password!="") {
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit('authenticated', true);
                    this.$router.replace({name: "secure"});
                } else {
                    console.log("Usuario y/o contraseña incorrecta");
                    alert("Usuario y/o contraseña incorrecta");
                }
            } else {
                console.log("No ha ingresado usuario y contraseña");
                alert("Debe ingresar usuario y contraseña");
            }
        }
    }
};
</script>
<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
