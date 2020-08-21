 <template>
  <v-sheet class="container-badge background">
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
        <div class="text-uppercase text-center mr-2 pb-2">
          <h1>Operação</h1>
          <h1>Acolhida</h1>
        </div>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-space-between align-center">
      <v-col cols="3">
        <div class="container-photo d-flex align-baseline ml-2">
          <v-img :src="registerLocal.urlimage" height="75" width="85"></v-img>
        </div>
      </v-col>
      <v-col>
        <div class="ml-4">
          <div class="d-flex flex-column flex-wrap ml-2">
            <span>{{ registerLocal.cpf }}</span>
            <span>{{ abbreviateNames(registerLocal.fullname) }}</span>
            <span class="headline">{{ abbreviateOffices(registerLocal.office) }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
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
      if (newQuestion) {
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

.background {
  background-image: url("../../../assets/images/simbolo-adm 2.png");
  background-size: 200px 140px;
  background-position-x: 120px;
  background-position-y: 105px;
}
</style>