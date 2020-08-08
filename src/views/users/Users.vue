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
  <h1>users index</h1>
</template>
 
 <script>
// import firebase from "firebase";
import admin from 'firebase-admin'

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
      // List batch of users, 1000 at a time.
      // admin
      //   .auth()
      //   .listUsers(1000, nextPageToken)
      //   .then(function (listUsersResult) {
      //     listUsersResult.users.forEach(function (userRecord) {
      //       console.log("user", userRecord.toJSON());
      //     });
      //     if (listUsersResult.pageToken) {
      //       // List next batch of users.
      //       listAllUsers(listUsersResult.pageToken);
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log("Error listing users:", error);
      //   });
      admin.auth().listUsers
    },
  },
};
</script>
 
 <style>
</style>