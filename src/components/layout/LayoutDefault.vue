 <template>
  <v-app>
    <Header></Header>
    <SideBar />
    <v-main>
      <v-container grid-list-xs>
        <slot></slot>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
 
 <script>
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
export default {
  components: {
    Header,
    Footer,
    SideBar,
  },
};
</script>
 
 <style>
.color-theme {
  background: #00b4db;
  background: -webkit-linear-gradient(to bottom, #0083b0, #00b4db);
  background: linear-gradient(to bottom, #0083b0, #00b4db);
}
</style>