 <template>
  <div>
    <v-row>
      <v-col>
        <v-btn icon color="primary" :to="{name: 'registers'}">
          <v-icon x-large>mdi-arrow-left-bold</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn block color="success" @click="print">
          <v-icon>mdi-printer</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- <v-container grid-list-xs> -->
    <div
      ref="badge"
      class="ma-4"
      v-for="(register, i) in registers"
      :key="register.key"
    >
      <!-- <template v-if="i == 2" class="page-break"> -->
      {{ i }}
      <Badge :register="register" />
      <!-- </template> -->
      <!-- <template v-else>
        <Badge :register="register" />
      </template>-->
    </div>
    <!-- </v-container> -->
  </div>
</template>
 
 <script>
import Badge from "./components/Badge";

export default {
  props: {
    registers: { type: Array, required: true },
  },
  components: {
    Badge,
  },
  methods: {
    print() {
      const html = this.$refs.badge.innerHTML;
      print(html);
      console.log(html);
    },
  },
};
</script>
 
 <style>
/* @media all {
  .page-break {
    display: none;
  }
} */

/* @media print {
  .page-break {
    display: block;
    page-break-before: always;
  }
} */
</style>