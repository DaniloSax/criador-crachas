 <template>
  <v-app>
    <Header></Header>
    <v-main></v-main>
    <Footer />
  </v-app>
</template>
 
 <script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
 
 <style>
</style>