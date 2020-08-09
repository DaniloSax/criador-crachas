 <template>
  <!-- <v-data-table
    headers="headers"
    items="items"
    hide-actions
    class="elevation-1"
    select-all
    pagination.sync="pagination"
    item-key="id"
    loading="true"
    search="search"
  ></v-data-table> -->
  <div>

  <h1>users index</h1>
  <v-btn color="primary" to="/users/create">Add Usu[ario</v-btn>
  </div>
</template>
 
 <script>
// import firebase from "firebase";

export default {
  created() {
    // this.users = firebase.auth().listAll
  },
  data() {
    return {
      he1aders: [],
    };
  },
  methods: {
    listAllUsers() {
      console.log(`lista de usuarios`)
    },
  },
};
</script>
 
 <style>
</style>