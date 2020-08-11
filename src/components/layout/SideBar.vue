 <template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-list dense>
      <router-link class="text-decoration-none" to="/">
        <v-list-item class="text-decoration-none" link>
          <v-list-item-icon>
            <v-icon>mdi-home-city-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link class="text-decoration-none" :to="{name:'registers'}">
        <v-list-item class="text-decoration-none" link>
          <v-list-item-icon>
            <v-icon>mdi-home-city-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Cadastros</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link class="text-decoration-none" to="/users">
        <v-list-item class="text-decoration-none" link>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Usuários</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>
 
 <script>
export default {
  data() {
    return {
      items: [{ title: "Usuários", path: "/users", icon: "mdi-account-group" }],
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(value) {
        this.$store.commit("updateDrawer", value);
      },
    },
  },
};
</script>
 
 <style>
</style>