 <template>
  <div>
    <router-view></router-view>
    <v-card tile>
      <v-card-title class="blue lighten-3 d-flex justify-center" primary-title>
        <span class="headline white--text">Cadastros</span>
      </v-card-title>
      <v-card-text>
        <v-row class="d-flex align-baseline">
          <v-col cols="4">
            <v-text-field label="Buscar" prepend-icon="mdi-magnify" v-model="search" clearable></v-text-field>
          </v-col>
          <v-btn :to="{name:'registersCreate'}" color="success" class="justify-end">Novo</v-btn>
        </v-row>

        <v-data-table
          tile
          :headers="headers"
          :items="registers"
          :search="search"
          :footer-props="{
        itemsPerPageText: 'Linhas por Página',
        itemsPerPageAllText: 'Todos',
      }"
        >
          <template v-slot:item.actions="{ item }">
            <span class="d-flex justify-center">
              <v-btn icon color="primary" @click="editUser(item.key)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon color="red" @click="deleteUser(item.key, item.cpf)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <PreViewCardDialog :register="item" />

              <v-btn
                icon
                color="cyan lighten-1"
                target="_blanck"
                :to="{name:'showBadge', params: {id: item.key}}"
              >
                <v-icon>mdi-printer</v-icon>
              </v-btn>
            </span>
            <!-- <dialog-delete :id="item.id" @ladingTable="loading = $event"></dialog-delete> -->
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>
 
 <script>
import firebase from "firebase";

import PreViewCardDialog from "./components/dialogs/PreViewCard";

export default {
  created() {
    this.listAllData();
  },
  data() {
    return {
      search: "",
      registers: [],
      headers: [
        { text: "CPF", value: "cpf" },
        { text: "Nome", value: "fullname" },
        { text: "Cargo", value: "office" },
        { text: "Impresso", value: "print" },
        { text: "Ações", value: "actions" },
      ],
    };
  },
  components: {
    PreViewCardDialog,
  },
  methods: {
    listAllData() {
      const vm = this;
      firebase
        .database()
        .ref("registers/")
        .on("value", (snapshot) => {
          vm.registers = [];
          snapshot.forEach((item) => {
            const register = {
              key: item.key,
              fullname: item.val().fullname,
              cpf: item.val().cpf,
              office: item.val().office,
              urlimage: item.val().urlimage,
            };
            vm.registers.push(register);
          });
        });
    },

    editUser(key) {
      console.log("editUser", key);
    },
    deleteUser(key, cpf) {
      firebase.database().ref(`registers/${key}`).remove();
      // Create a reference to the file to delete
      const storageRef = firebase.storage().ref();
      var desertRef = storageRef.child(`images/${cpf}`);

      desertRef
        .delete()
        .then(() => {
          // File deleted successfully
          console.log("File deleted successfully");
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
          console.log(" Uh-oh, an error occurred!", error);
        });
    },
    details(key) {
      console.log("details", key);
    },
    print(key) {
      console.log("print", key);
    },
  },
};
</script>
 
 <style>
</style>