<template>
  <v-app class="cardd">
   
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
