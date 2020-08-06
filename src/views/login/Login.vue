<template>
  <v-card>
    <v-card-title class="primary white--text">Login</v-card-title>
    <v-card-text>
      <v-text-field label="Email" type="text" v-model="email"></v-text-field>
      <v-text-field label="Senha" type="password" v-model="password"></v-text-field>

      <v-btn color="success" @click.stop="createUser()">Logar</v-btn>
    </v-card-text>
  </v-card>
</template>
    
<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods:{
      createUser(){
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      }
  }
};
</script>
    
    <style>
</style>