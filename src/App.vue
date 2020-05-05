<template>
  <v-app class="cardd">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h2 class="font-weight-black">Dolar Time</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn exact :to="{ name: 'Home' }" text>
        <span class="mr-2">Home</span>
        <v-icon>fas fa-th-list</v-icon>
      </v-btn>
      <v-btn exact :to="{ name: 'DolarCl' }" text>
        <span class="mr-2">Chile</span>
        <v-icon>fas fa-th-list</v-icon>
      </v-btn>
      <v-btn exact :to="{ name: 'DolarV' }" text>
        <span class="mr-2">Venezuela</span>
        <v-icon>fas fa-th-list</v-icon>
      </v-btn>
      
    </v-app-bar>

    <v-content>
      <router-view></router-view>

      <v-dialog
      v-model="loading.estado"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        :color="loading.color"
        dark
      >
        <v-card-text>
          {{loading.titulo}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "App",

  components: {},

  data: () => ({
    
  }),
  computed:{
    ...mapState(['loading'])
  }
};
</script>

<style lang="scss" scoped>
/* .light{
        primary: #0e519e;
        secondary: #424242;
        accent: #82B1FF;
        error: #FF5252;
        info: #2196F3;
        success: #4CAF50;
        warning: #FFC107;      } */
</style>
