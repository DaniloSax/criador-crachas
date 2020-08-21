 <template>
  <span>
    <v-tooltip bottom>
      <template v-slot:activator="{on}">
        <v-btn icon color="light-blue" v-on="on" @click.stop="dialog = true">
          <v-icon>mdi-card-account-details-outline</v-icon>
        </v-btn>
      </template>
      <span>Pré-visualizar</span>
    </v-tooltip>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-text>
          <v-container class="d-flex justify-center">
            <Badge :register="register" :print="print" />
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="red" @click="dialog = false">Cancelar</v-btn>
          <v-btn text color="cyan" target="_blanck" :to="{name:'showBadge', params: {id: register.key}}" >Imprimir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>
 
<script>
import Badge from "./../Badge";
// import jsPDF from "jspdf";

export default {
  props: ["register"],
  data() {
    return {
      dialog: false,
      image: null,
      print: false,
    };
  },
  components: {
    Badge,
  },
  methods: {},
};
</script>
 
 <style>
</style>