 <template>
  <v-app-bar app absolute color="primary" dark>
    <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-menu offset-y transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on }">
          <v-btn text dark v-on="on">
            <v-avatar class="mr-2">
              <img src="@/assets/images/d1.jpg" alt="alt" />
            </v-avatar>Name User
          </v-btn>
        </template>

        <v-card>
          <v-card-title primary-title>Name User</v-card-title>
          <v-card-text></v-card-text>
          <v-divider />
          <v-list>
            <v-list-item>
              <!-- @click="editPerfil()" -->
              <v-btn text icon color="green" class="pl-4">
                <v-icon>mdi-account</v-icon>Perfil
              </v-btn>
            </v-list-item>
            <!-- @click="logout()" -->
            <v-list-item>
              <v-btn text icon color="red">
                <v-icon>mdi-logout-variant</v-icon>Sair
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>
 
 <script>
export default {};
</script>
 
 <style>
</style>