<template>
  <v-card>
    <v-card-title class="primary white--text">Login</v-card-title>
    <v-card-text>
      <v-text-field label="Email" type="text" v-model="email"></v-text-field>
      <v-text-field label="Senha" type="password" v-model="password"></v-text-field>

      <v-btn color="success" @click.stop="login()">Logar</v-btn>
    </v-card-text>
  </v-card>
</template>
    
<script>
export default {
  data() {
    return {
      email: "danilovsdanilo@gmail.com",
      password: "danilo123",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      }).then(()=>{
          this.$router.push('/home')
      });
    },
  },
};
</script>
    
    <style>
</style>