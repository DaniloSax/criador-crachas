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
            <v-btn icon color="primary" @click="editUser(item.key)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon color="red" @click="deleteUser(item.key)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>

            <PreViewCardDialog />

            <v-btn icon color="cyan lighten-1" @click="print(item.key)">
              <v-icon>mdi-printer</v-icon>
            </v-btn>

            <!-- <dialog-delete :id="item.id" @ladingTable="loading = $event"></dialog-delete> -->
          </template>
        </v-data-table>

        <Badge />
      </v-card-text>
    </v-card>
  </div>
</template>
 
 <script>
import firebase from "firebase";

import Badge from "./components/Badge";
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
    Badge,
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
            };
            vm.registers.push(register);
          });
        });
    },

    editUser(key) {
      console.log("editUser", key);
    },
    deleteUser(key) {
      firebase.database().ref(`registers/${key}`).remove();
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