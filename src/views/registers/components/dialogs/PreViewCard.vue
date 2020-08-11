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

    <v-dialog v-model="dialog" max-width="2000">
      <v-card>
        <v-card-title class="d-flex justify-center headline">Pré-visualização do Cartão</v-card-title>
        <v-card-text>
          <v-sheet height="200" width="400" color="white" elevation="10">
            <v-img src="@/assets/images/logo_admin_forBackgroundCard.png" height="200">
              <v-row class="d-flex align-center">
                <v-col cols="3">
                  <v-img
                    src="@/assets/images/logo_acolhida.png"
                    alt="logo_acolhida"
                    height="70"
                    width="70"
                    class="ml-4"
                  ></v-img>
                </v-col>
                <v-col>
                 <span class="headline text-uppercase">Operação Acolhida</span>
                </v-col>
              </v-row>
              <v-row class="d-flex justify-space-between align-center">
                <v-col cols="3">
                  <v-sheet
                    height="80"
                    width="85"
                    color="blue lighten-5"
                    elevation="10"
                    class="ml-2"
                  >Foto</v-sheet>
                </v-col>
                <v-col>
                  <v-sheet height="80" width="290" color="blue lighten-5" elevation="10">
                    <div class="d-flex flex-column wrap ml-2">
                      <span>529.301.572-91</span>
                      <span>Danilo Veloso de Sousa</span>
                      <span class="headline">Aux. Administrativo</span>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-img>
          </v-sheet>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text color="red" @click="dialog = false">Cancelar</v-btn>
          <v-btn text color="cyan" @click="dialog = false">Imprimir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>
 
<script>
// import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  data() {
    return {
      dialog: false,
      image: null,
    };
  },
};
</script>
 
 <style>
</style>