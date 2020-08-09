 <template>
  <v-card>
    <v-card-text>
      <v-text-field label="Nome do Usuário" v-model="user.name"></v-text-field>
      <v-text-field label="Nome Completo" v-model="user.fullName"></v-text-field>
      <v-text-field type="email" label="Email" v-model="user.email"></v-text-field>
      <v-text-field label="Senha" hint="Pelo menos 8 caracteres" min="8" v-model="user.pasword"></v-text-field>
      <v-card-actions class="d-flex justify-end">
        <v-btn color="success" type="submit" @click.prevent="storeUser()">Salvar</v-btn>
      </v-card-actions>
    </v-card-text>

    <div v-for="(user, i) in users" :key="i">{{ user }}</div>
    {{ users ? users.length : '' }}
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
      :footer-props="{
        itemsPerPageText: 'Linhas por Página',
        itemsPerPageAllText: 'Todos',
      }"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn icon color="primary" @click="editUser(item.key)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon color="red" @click="deleteUser(item.key)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>

        <!-- <dialog-delete :id="item.id" @ladingTable="loading = $event"></dialog-delete> -->
      </template>
    </v-data-table>
  </v-card>
</template>
 
 <script>
import firebase from "firebase";

export default {
  created() {
    this.getUsers();
  },
  data() {
    return {
      user: {},
      search: "",
      users: [],
      headers: [
        { text: "Usuário", value: "name" },
        { text: "Email", value: "email" },
        { text: "Nome Compleo", value: "fullName" },
        { text: "Ações", value: "actions" },
      ],
    };
  },
  computed: {},
  methods: {
    getUsers() {
      const vm = this;
      var ref = firebase.database().ref("users/");
      return ref.on("value", function (snapshot) {
        vm.users = [];
        snapshot.forEach(function (childSnapshot) {
          const user = {
            key: childSnapshot.key,
            name: childSnapshot.val().name,
            email: childSnapshot.val().email,
            fullName: childSnapshot.val().fullName,
          };
          vm.users.push(user);
        });
      });
    },
    storeUser() {
      firebase.database().ref("users/").push().set(this.user);
      // this.getUsers();
    },
    editUser(user_id) {
      this.users.find((item) => item.key == user_id);
      console.log("user_id encontrado", user_id);
    },
    deleteUser(user_id) {
      firebase.database().ref(`users/${user_id}`).remove();
    },
  },
};
</script>
 
 <style>
</style>