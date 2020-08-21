 <template>
  <v-card tile>
    <v-card-title class="blue lighten-5 d-flex justify-lg-space-between">
      <span class="headline">Novo Cadastro</span>

      <v-btn icon color="dark" :to="{name: 'registers'}">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-col cols="12" class="border mt-4 background-image">
        <v-row class="d-flex align-center">
          <v-col cols="3">
            <v-img
              src="@/assets/images/logo_acolhida.png"
              alt="logo_acolhida"
              height="80"
              width="80"
              class="ml-4"
            ></v-img>
          </v-col>
          <v-col>
            <div class="text-uppercase text-center text--black mr-2 pb-2">
              <h1>Operação Acolhida</h1>
            </div>
            <v-divider class="mt-2"></v-divider>
          </v-col>
        </v-row>

        <v-row>
          <ProgressBar :value="progress" />

          <v-col cols="4">
            <div class="container-photo ml-2">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <a @click.prevent="show=true">
                  <v-card :elevation="hover ? 16 : 2" tile>
                    <v-img :src="photo" height="195" width="900"></v-img>
                  </v-card>
                </a>
              </v-hover>
              <vue-image-crop-upload
                v-model="show"
                @crop-success="cropSuccess"
                langType="pt-br"
                noCircle
              />
            </div>
          </v-col>
          <v-col>
            <div class="container-content-badge">
              <v-col>
                <v-text-field label="Nome Completo" v-model="register.fullname" clearable></v-text-field>
                <v-text-field label="CPF" v-model="register.cpf" clearable></v-text-field>
                <v-text-field label="Cargo" v-model="register.office" clearable></v-text-field>
              </v-col>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-card-actions class="d-flex justify-end mt-2">
        <v-btn block color="primary" @click.prevent="onUploadPhoto">Registrar</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
 
 <script>
import UploadMixins from "./mixins/UploadMixins";
import ProgressBar from "./components/ProgressBar";

import VueImageCropUpload from "vue-image-crop-upload";

export default {
  data() {
    return {
      photo: "",
      show: false,
    };
  },
  components: {
    VueImageCropUpload,
    ProgressBar,
  },
  mixins: [UploadMixins],
};
</script>
 
<style scoped>
.background-image {
  background-image: url("../../assets/images/logo_admin_forBackgroundCard.png");
  background-size: 500px 240px;
  background-position-x: 880px;
  background-position-y: 110px;
}

.text--black {
  color: black;
}

.container-photo {
  height: 100%;
  width: 100%;
  padding: 4px;
  border: 0.2px solid gray;
}

.container-content-badge {
  height: 200px;
  width: 100%;
  /* border: 1px solid; */
}

.border {
  border: 1px solid;
}
</style>