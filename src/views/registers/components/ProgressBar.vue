 <template>
  <v-container grid-list-xs>
    <v-progress-linear :value="value"  height="15" rounded :active="value > 0" color="cyan">
      <span class="white--text">{{value}}%</span>
    </v-progress-linear>
  </v-container>
</template>
 
 <script>
export default {
  created() {
    console.log(this.value);
  },
  props: {
    value: { type: Number, required: true },
  },
};
</script>
 
 <style>
</style>