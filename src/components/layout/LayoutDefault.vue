 <template>
  <v-app>
    <Header></Header>
    <SideBar/>
    <v-main>
      <slot></slot>
    </v-main>
    <Footer />
  </v-app>
</template>
 
 <script>
import Header from "./Header";
import Footer from "./Footer";
import SideBar from './SideBar'
export default {
  components: {
    Header,
    Footer,
    SideBar
  },
};
</script>
 
 <style>
</style>