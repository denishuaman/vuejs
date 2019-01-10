<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" class="form-control" name="usuario" v-model="input.usuario" placeholder="Usuario" autocomplete="off">
        <input type="password" class="form-control" name="contrasena" v-model="input.contrasena" placeholder="Contraseña" autocomplete="off">
        <hr>
        <div align="center">
            <button type="button" v-on:click="login()" class="btn btn-primary">Iniciar sesión</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import sha256 from 'sha256';
import {URL_LOGIN_INICIAR_SESION} from '../constants/constants.js';

export default {
    name: "Login",
    data() {
        return {
            input: {
                usuario: "",
                contrasena: ""
            },
            responseData: {
                idUsuario: 0,
                tTipoUsuario: {
                    idTipoUsuario: 0,
                    descripcion: ""
                },
                usuario: "",
                contrasena: "",
                codigoUsuario: "",
                nombres: "",
                apellidos: "",
                correo: "",
                estado: 0
            }
        };
    },
    methods: {
        login() {
            if(this.input.usuario!="" && this.input.contrasena!="") {
                this.input.contrasena = sha256(this.input.contrasena);
                console.log("Entrada", this.input);
                axios({
                    method: "POST",
                    url: URL_LOGIN_INICIAR_SESION,
                    data: this.input,
                    headers: { "content-type": "application/json" }
                }).then(
                    result => {
                        this.responseData=result.data;
                        console.info("Response", this.responseData);
                        this.$emit('authenticated', true);
                        this.$emit('datausuario.usuario', this.responseData.usuario);
                        this.$router.replace({name: "secure"});
                    },
                    error => {
                        console.error("Error", error);
                    }
                );
            } else {
                console.log("No ha ingresado usuario y contraseña");
                alert("Debe ingresar usuario y contraseña");
            };
        }
    }
};
</script>
<style scoped>
#login {
  width: 70%;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  padding: 5%;
}
</style>
