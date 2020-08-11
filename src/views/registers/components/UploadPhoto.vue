 <template>
  <div>
    <!-- <v-file-input
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Anexar foto"
      prepend-icon="mdi-camera"
      v-model="photo"
      label="Foto"
    ></v-file-input>-->

    <clipperUpload v-model="photo" />
  </div>
</template>
 
 <script>
import { clipperUpload } from "vuejs-clipper";

export default {
  data() {
    return {
      photo: null,
    };
  },
  components: {
    clipperUpload,
  },
};
</script>
 
 <style>
</style>