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

            <v-container grid-list-xs>
              <div class="d-flex justify-center">
                <v-image-input
                  imageFormat="png"
                  v-model="photo"
                  value="teste"
                  :image-quality="0.85"
                  clearable
                  clearIcon="mdi-close"
                />
                <!-- <v-btn class="align-content-end" color="primary" @click="base64ToFile()">Carregar</v-btn> -->
                <Badge :imgBase64="photo" :register="register" />
              </div>
            </v-container>

            <v-card-actions class="d-flex justify-end">
              <v-btn block color="primary" @click="registerCard()">Registrar</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>
 
 <script>
import firebase from "firebase";

import VImageInput from "vuetify-image-input/a-la-carte";
import Badge from "./components/Badge";

export default {
  data() {
    return {
      register: {},
      photo: null,
      urlImge: "",
    };
  },
  components: {
    VImageInput,
    Badge,
  },
  methods: {
    registerCard() {
      console.log("registrando new data");
      firebase.database().ref("registers").push().set(this.register);
    },

    base64ToFile() {
      const url = this.photo;
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "File name", { type: "image/png" });
          console.log(file);
          return (this.urlImge = file);
        });
    },

    onUploadPhoto() {
      const url = this.photo;
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "File name", { type: "image/png" });

          let storageRef = firebase.storage().ref();
          var uploadTask = storageRef
            .child(`images/${this.register.cpf}`)
            .put(file);

          uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
              var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

              console.log("Upload is " + progress + "% done");
            },
            function (error) {
              switch (error.code) {
                case "storage/unauthorized":
                  break;

                case "storage/canceled":
                  break;

                case "storage/unknown":
                  break;
              }
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                this.urlImge = downloadURL;
                console.log("File available at", downloadURL);
              });
            }
          );
        });
    },
  },
};
</script>
 
 <style>
</style>