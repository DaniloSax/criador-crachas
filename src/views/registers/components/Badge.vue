 <template>
  <div class="container-badge">
    <v-row class="d-flex align-center">
      <v-col cols="3">
        <v-img
          src="@/assets/images/logo_acolhida.png"
          alt="logo_acolhida"
          height="70"
          width="70"
          class="ml-4"
        ></v-img>
      </v-col>
      <v-col>
        <div class="border-bottom text-uppercase text-center mr-2 pb-2">
          <h1>Operação</h1>
          <br />
          <h1>Acolhida</h1>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-space-between align-center">
      <v-col cols="3">
        <div class="container-photo d-flex align-baseline ml-2">
          <v-img :src="imgBase64" height="75" width="85"></v-img>
        </div>
      </v-col>
      <v-col>
        <div class="container-content-badge mr-2 ml-2">
          <div class="d-flex flex-column wrap ml-2">
            <span>{{ registerLocal.cpf }}</span>
            <span>{{ registerLocal.fullname }}</span>
            <span class="headline">{{ registerLocal.office }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
 
 <script>
export default {
  props: {
    imgBase64: { type: String, required: false },
    register: { type: Object, required: false },
  },
  data() {
    return {
      registerLocal: {
        cpf: "529.301.572.91",
        fullname: "Danilo Veloso de Sousa",
        office: "Diretor de Divisão",
      },
    };
  },
  watch: {
    register(newQuestion) {
      if (newQuestion) {
        this.registerLocal = this.register;
      }
    },
  },
};
</script>
 
 <style scoped>
.container-badge {
  height: 210px;
  width: 350px;
  /* padding: 4px; */
  border: 1px solid;
  color: black;

  background-image: url("../../../assets/images/logo_admin_forBackgroundCard.png");
  background-size: 220px 120px;
  background-position-x: 240px;
  background-position-y: 90px;
}

.border-bottom {
  border-bottom: 0.5px solid gray;
}

.container-photo {
  height: 85px;
  width: 85px;
  padding: 4px;
  border: 0.2px solid gray;
}

.container-content-badge {
  height: 85px;
  width: 290;
  /* border: 1px solid; */
}
</style>