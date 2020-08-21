<template>
  <div>
    <template v-if="$route.name == 'login'">
      <v-app>
        <v-main class="d-flex align-center">
          <v-container fluid class="d-flex justify-center">
            <router-view />
          </v-container>
        </v-main>
      </v-app>
    </template>
    <template v-else-if="$route.name == 'BadgePrint'">
      <v-app>
        <v-main class="d-flex align-center">
          <v-container fluid class="d-flex justify-center">
            <router-view />
          </v-container>
        </v-main>
      </v-app>
    </template>
    <template v-else>
      <layout-default>
        <router-view />
      </layout-default>
    </template>
  </div>
</template>

<script>
import LayoutDefault from "./components/layout/LayoutDefault";
import firebase from "firebase";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        window.uid = user.uid;
      } else window.uid = null;
    });
  },
  name: "App",
  components: {
    LayoutDefault,
  },

  data: () => ({
    //
  }),
};
</script>


<style>
</style>