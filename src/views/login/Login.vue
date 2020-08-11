<template>
  <v-card width="900" tile>
    <v-card-title class="color-theme white--text d-flex justify-center">Login</v-card-title>
    <v-card-text class="mt-2">
      <v-text-field label="Email" type="text" v-model="credentials.email"></v-text-field>
      <v-text-field label="Senha" type="password" v-model="credentials.password"></v-text-field>

      <div class>
        <v-btn
          block
          text
          color="primary"
          @click.stop="login()"
          @keyup.enter="login()"
          :loading="loading"
        >Logar</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>
    
<script>
// import authMixins from "../../mixins/authMixins";
import firebase from "firebase";

export default {
  data() {
    return {
      credentials: {
        email: "danilovsdanilo@gmail.com",
        password: "danilo123",
      },
      loading: false,
    };
  },
  // mixins: [authMixins],
  methods: {
    login() {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.credentials.email,
          this.credentials.password
        )
        .then(() => {
          this.loading = false;
          window.uid = firebase.auth().currentUser.uid;
          return this.$router.push("/home");
        });
    },
  },
};
</script>
    
    <style>
</style>