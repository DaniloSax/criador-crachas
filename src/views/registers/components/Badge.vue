 <template>
  <!-- container-badge -->
  <div class="elevation-2 image-fundo" style="border: 1px solid; color: black;">
    <v-row class="d-flex align-center">
      <v-col cols="3">
        <img
          src="@/assets/images/logo_acolhida.png"
          alt="logo_acolhida"
          height="70"
          width="70"
          class="ml-4"
        />
      </v-col>
      <v-col>
        <div class="text-uppercase text-center mr-2 pb-2">
          <h1>Operação</h1>
          <h1>Acolhida</h1>
        </div>
        <v-divider class="mr-2"></v-divider>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-space-between align-center">
      <v-col cols="3">
        <div class="container-photo d-flex align-baseline ml-2">
          <img :src="registerLocal.urlimage" height="75" width="75" alt="foto do crachá" />
        </div>
      </v-col>
      <v-col>
        <div class="ml-4">
          <div class="d-flex flex-column flex-wrap ml-2">
            <span>{{ registerLocal.cpf | cpfFormat }}</span>
            <span>{{ abbreviateNames(registerLocal.fullname) }}</span>
            <span class="headline">{{ abbreviateOffices(registerLocal.office) }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
 
 <script>
export default {
  mounted() {
    this.registerLocal = this.register;
  },
  props: {
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
      if (("new Question", newQuestion)) {
        console.log(newQuestion);
        this.registerLocal = newQuestion;
      }
    },
  },
  methods: {
    abbreviateOffices(str) {
      const nome = str.replace(/\s+/gi, " ").trim();

      let array_names = nome.split(" ");
      console.log(array_names);
      if (array_names.length > 3) {
        return array_names
          .map((work, i) => {
            if (i > 0 && i < array_names.length - 1) {
              return work.slice(0, 3) + ".";
            } else return work;
          })
          .join(" ");
      } else {
        return array_names.join(" ");
      }
    },
    abbreviateNames(str) {
      const nome = str.replace(/\s+/gi, " ").trim();

      let array_names = nome.split(" ");
      console.log(array_names);
      if (array_names.length > 3) {
        return array_names
          .map((work, i) => {
            if (i > 0 && i < array_names.length - 1) {
              return work[0] + ".";
            } else return work;
          })
          .join(" ");
      } else {
        return array_names.join(" ");
      }
    },
  },
};
</script>
 
 <style scoped>
.container-badge {
  border: 1px solid;
  color: black;
}

.container-photo {
  height: 85px;
  width: 85px;
  padding: 4px;
  border: 0.2px solid gray;
}

.image-fundo {
  background-image: url("../../../assets/images/simbolo-adm 2.png");
  background-position: bottom right;
  background-size: 150px 132px;
  -webkit-print-color-adjust: exact;
  /* background-size: 100px 40px ; */
  /* background-position-x: 260px; */
  /* background-position-y: 105px; */
}
</style>