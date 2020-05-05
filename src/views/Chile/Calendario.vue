<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <v-card >
          <v-row height="500" justify="center">
            <v-date-picker
              class="my-4"
              locale="es-cl"
              v-model="fecha"
              :min="min"
              :max="max"
              full-width
              @change="getDolarCl(fecha)"
            >
              <v-btn class="text-right" block color="primary" dark>
                <span v-if="valor === 'Sin resultados'">{{ valor }}</span>
                <span v-else>{{ valor }} <small>Pesos Chileno</small></span>
              </v-btn>
            </v-date-picker>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  name: "DolarCl",
  data() {
    return {
      valor: null,
      min: "1985-01-01",
      max: new Date().toISOString().substr(0, 10),
      fecha: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
    ...mapMutations(['mostrarLoading', 'ocultarLoading']),
    async getDolarCl(dia) {
      let arrayF = dia.split("-");
      let ddmmyy = arrayF[2] + "-" + arrayF[1] + "-" + arrayF[0];

  
      try {
        this.mostrarLoading({
          titulo: 'Obteniendo información',
          color: 'secundary'
        })
        let datos = await axios.get(
          `https://mindicador.cl/api/dolar/${ddmmyy}`
        );
        console.log(datos)

        if (datos.data.serie.length > 0) {
          this.valor = await datos.data.serie[0].valor;
        } else {
          this.valor = "Sin resultados";
        }
      } catch (error) {
        console.log(error);
      }  finally {
        this.ocultarLoading();
      }
    },
  },
  
  created() {
    this.getDolarCl(this.fecha);
  },
};
</script>

<style></style>
