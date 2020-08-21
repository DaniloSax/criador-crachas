 <template>
  <div>
    <v-btn  block color="success" @click="print">
      <v-icon>mdi-printer</v-icon>
    </v-btn>
    <div ref="badge" class="ma-4">
      <Badge :register="register" />
    </div>
  </div>
</template>
 
 <script>
import firebase from "firebase";
// import printer from "electron-print";

import Badge from "./components/Badge";

// window.onload = print()

export default {
  created() {
    this.featchRegister();
  },
  props: ["id"],
  data() {
    return {
      register: null,
    };
  },
  components: {
    Badge,
  },
  methods: {
    featchRegister() {
      firebase
        .database()
        .ref(`registers/${this.id}`)
        .on("value", (snapshot) => {
          this.register = snapshot.val();
        });
    },

    print() {
      const html = this.$refs.badge.innerHTML;
      print(html);
      console.log(html);
    },
  },
};
</script>
 
 <style>
</style>