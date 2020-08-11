 <template>
  <v-card tile>
    <v-card-title class="blue lighten-5 d-flex justify-lg-space-between">
      <span class="headline">Novo Cadastro</span>

      <v-btn icon color="dark" :to="{name: 'registers'}">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-row>
      <v-col>
        <v-sheet class="pa-12" color="white">
          <v-card-title primary-title>
            <span class="text-subtitle-1">Novo Cadastro</span>
          </v-card-title>

          <v-card-text>
            <v-text-field label="Nome Completo" v-model="register.fullname"></v-text-field>
            <v-text-field label="CPF" v-model="register.cpf"></v-text-field>
            <v-text-field label="Cargo" v-model="register.office"></v-text-field>

            <upload-photo></upload-photo>

            <v-card-actions class="d-flex justify-end">
              <v-btn color="success" @click="registerCard()">Registrar</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-sheet>
      </v-col>

      <!-- <v-divider vertical></v-divider> -->

      <!-- <v-col>
        <v-sheet class="pa-12" color="grey lighten-3">
          <v-card-title primary-title>
            <span class="text-subtitle-1">Pré-visualização do cartão</span>
          </v-card-title>

          <v-card-text>
            <CardAccess />
          </v-card-text>
        </v-sheet>
      </v-col> -->
    </v-row>
  </v-card>
</template>
 
 <script>
import firebase from "firebase";
import UploadPhoto from "./components/UploadPhoto";
// import CardAccess from "./components/CardAccess";

export default {
  data() {
    return {
      register: {},
    };
  },
  components: {
    UploadPhoto,
    // CardAccess,
  },
  methods: {
    registerCard() {
      console.log('registrando new data')
      firebase.database().ref("registers").push().set(this.register);
    },
  
  },
};
</script>
 
 <style>
</style>