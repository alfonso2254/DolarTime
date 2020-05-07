<template>
  <v-container>

    <v-layout :justify-center="true" mt-4>
      <v-flex >
        <v-card class="convertidor" dark>
          <v-layout
          wrap
          :align-center="true"
          :justify-center="true" 
          class="text-convertidor md-1">
            <!--Inicio Calendario-->
            <v-flex pa-0 xs12 sm12 md4>
              <v-layout
              :column="true"
              :justify-center="true"
              :align-center="true"
              :fill-height="true"
              >
              <v-flex>
                
              </v-flex>
                <v-flex>
                  <v-date-picker
                  class="calendario"
                  :scrollable="true"
                  locale="es-011"
                  style="border-radius:20px 1px;"
                  v-model="fechaActual"
                  @change="getDolar(fechaActual, horaSelect)"
                >
                <v-select
                class="reloj"
                :rounded="true"
                v-model="horaSelect"
                @change="getDolar(fechaActual, horaSelect)"
                :items="horaItem"
                outlined
                color="primary"
                append-icon="fas fa-stopwatch"
                dense
                item-color="primary"
              ></v-select>
              </v-date-picker>
                </v-flex>
              
              </v-layout>
            </v-flex>
            <!--Fin Calendario-->

          <v-flex xs12  md8 >
          <v-layout           
            :align-center="true"
            :column="true"
          >
            
              <v-card-title><h2>MonitorDolar.com</h2></v-card-title>
              <v-flex class="resulCambio resulCambioArriba">
                <h2>{{ fechaActualC }} {{ horaSelect }}</h2>
              </v-flex>
                <v-flex 
                v-if="noHistorial" 
                class="text-center" 
                :align-center="true" 
                :justify-center="true">
                <v-flex class="resulCambio">
                  <h1>
                    Bs: {{ decimal(promedioTotal, 2, "Bs") }}
                  </h1>
                </v-flex>
                
                  <!--Inicio Input importe y select dolar-->
                <v-layout :justify-center="true" :align-start="true">
                  <v-flex ml-2>
                    <v-select
                      :rounded="true"
                      v-model="MonedaSelect"
                      :items="Moneda"
                      outlined
                      append-icon="fas fa-money-bill-wave fa-sm"
                      item-color="primary"
                      class="inputSelect"
                      dense
                    ></v-select>
                  </v-flex>

                  <v-flex ma-3>
                    <v-icon>
                      fas fa-exchange-alt
                    </v-icon>
                  </v-flex>

                  <v-flex mr-2>
                    <v-text-field
                      outlined
                      :rounded="true"
                      label="Importe"
                      v-model.number="importe"
                      :value="1"
                      hint="Importe a cambiar"
                      append-icon="fas fa-globe-americas"
                      item-color="primary"
                      dense
                      class="inputSelect"
                      type="number"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <!--Fin Input importe y select dolar-->

                <!--Inicio resultado importe y cambio del dolar promedio -->
                <v-flex class="text-center">
                  <v-flex class="resulCambio resulCambioArriba">
                    <h1>{{ importeResult }} =</h1>
                  </v-flex>

                  <v-flex class="resulCambio">
                    <h1>{{ CambioResult }}</h1>
                  </v-flex>
                </v-flex>
                <!--Fin resultado importe y cambio del dolar promedio -->

                <!--Inicio precio casa de cambios-->
                <v-layout :justify-center="true" :align-center="true" xs12 class="text-center" :column="true">
                  <v-layout ml-1 :justify-center="true" :align-center="true"  class="box">
                    <v-flex xs3 sm3 md3>
                      DolarToday
                    </v-flex>

                    <v-flex sx5 sm5 md5>
                      {{ CalculoDolarToday }}
                    </v-flex>

                    <v-flex xs1 sm1 md1>
                      ↓
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      -100,15%
                    </v-flex>
                  </v-layout>

                  <v-layout ml-1 :justify-center="true" :align-center="true" class="box">
                    <v-flex xs4 sm3 md3>
                      LocalBitcoin (BTC)
                    </v-flex>

                    <v-flex sx5 sm5 md5>
                      {{ CalculoLocalBitcoin }}
                    </v-flex>

                    <v-flex xs1 sm1 md1>
                      ↓
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      -0,15%
                    </v-flex>
                  </v-layout>
                  <v-layout ml-1 :justify-center="true" :align-center="true" class="box">
                    <v-flex xs3 sm3 md3>
                      AirTM
                    </v-flex>

                    <v-flex sx5 sm5 md5>
                      {{ CalculoAirTM }}
                    </v-flex>

                    <v-flex xs1 sm1 md1>
                      ↓
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      -0,15%
                    </v-flex>
                  </v-layout>
                  <v-layout ml-1 :justify-center="true" :align-center="true" class="box">
                    <v-flex xs3 sm3 md3>
                      Bolivar Cucuta
                    </v-flex>

                    <v-flex sx5 sm5 md5>
                      {{ CalculoBolivarCucuta }}
                    </v-flex>

                    <v-flex xs1 sm1 md1>
                      ↓
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      -0,15%
                    </v-flex>
                  </v-layout>
                  <v-layout ml-1 :justify-center="true" :align-center="true" class="box">
                    <v-flex xs3 sm3 md3>
                      Yadio.io
                    </v-flex>

                    <v-flex sx5 sm5 md5>
                      {{ CalculoYadioio }}
                    </v-flex>

                    <v-flex xs1 sm1 md1>
                      ↓
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      -0,15%
                    </v-flex>
                  </v-layout>
                  <v-layout ml-1 :justify-center="true" :align-center="true" class="box">
                    <v-flex xs3 sm3 md3>
                      Movicambio
                    </v-flex>

                    <v-flex sx5 sm5 md5>
                      {{ CalculoMovicambio }}
                    </v-flex>

                    <v-flex xs1 sm1 md1>
                      ↓
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      -0,15%
                    </v-flex>
                  </v-layout>
                  <v-layout ml-1 :justify-center="true" :align-center="true" class="box">
                    <v-flex xs3 sm3 md3>
                      Mkambio
                    </v-flex>

                    <v-flex sx5 sm5 md5>
                      {{ CalculoMkambio }}
                    </v-flex>

                    <v-flex xs1 sm1 md1>
                      ↓
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      -0,15%
                    </v-flex>
                  </v-layout>
                </v-layout>
                <!--Fin precio casa de cambios-->
              </v-flex>
              <!--Inicio Mensaje de no result si no hay datos de la api-->
              <v-flex class="mensajeNoHistorial text-center" v-if="!noHistorial">
                <h1 class="mensajeNoHistorial">
                  No existe historial para la fecha / hora indicada, se puede
                  deber a que fue día feriado o fin de semana.
                </h1>
              </v-flex>
              <!--Fin Mensaje de no result si no hay datos de la api-->
            
          </v-layout>
          </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Fullscreen from "vue-fullscreen/src/component.vue"
import { mapMutations } from "vuex";
import axios from "axios";
export default {
  components: {Fullscreen},
  data() {
    return {
      fechaActual: new Date().toISOString().substr(0, 10),
      horaSelect: "9:00 AM",
      horaItem: ["9:00 AM", "1:00 PM", "5:00 PM"],
      MonedaSelect: "USD",
      Moneda: [
        { text: "$ Dolares", value: "USD" },
        { text: "Bs Bolivares", value: "BS" },
      ],
      importe: 1,
      noHistorial: true,
      //Variables de los precios
      promedioTotal: 0,
      DolarToday: 0,
      LocalBitcoin: 0,
      AirTM: 0,
      BolivarCucuta: 0,
      Yadioio: 0,
      Movicambio: 0,
      Mkambio: 0,
      fullscreen: false
    };
  },
  computed: {
    fechaActualC(){
      let arrayFecha = this.fechaActual.split("-");
      let result = arrayFecha[2]+'/'+arrayFecha[1]+'/'+arrayFecha[0]
      return result
    },
    importeResult() {
      let result1;
      if (this.MonedaSelect === "USD") {
        result1 = this.decimal(this.importe, 2, "$");
      } else if (this.MonedaSelect === "BS") {
        result1 = this.decimal(this.importe, 2, "Bs");
      }
      return result1;
    },
    CambioResult() {
      let result;

      if (this.MonedaSelect === "USD") {
        result = this.importe * this.promedioTotal;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.promedioTotal;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoDolarToday() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.DolarToday;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.DolarToday;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoLocalBitcoin() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.LocalBitcoin;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.LocalBitcoin;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoAirTM() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.AirTM;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.AirTM;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoBolivarCucuta() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.BolivarCucuta;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.BolivarCucuta;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoYadioio() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.Yadioio;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.Yadioio;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoMovicambio() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.Movicambio;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.Movicambio;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoMkambio() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.Mkambio;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.Mkambio;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
  },
  methods: {
   
    ...mapMutations(['mostrarLoading', 'ocultarLoading']),
   
    decimal(value, n, simbolo) {
      let val = value.toFixed(n).replace(".", ",") + " " + simbolo;
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    async getDolar(fecha1, hora) {
      let arrayFecha = fecha1.split("-");
      let horaI = hora;
      let anio = Number(arrayFecha[0]);
      let mes = arrayFecha[1];
      let fecha = arrayFecha[2];

      let TimeFecha = {
        hora,
        anio,
        mes,
        fecha,
      };

      try {
        this.mostrarLoading({
          titulo: 'Obteniendo información',
          color: 'secundary'
        });
        let datos = await axios.get(
          "https://monitordolar.com/api/index.php?action=historial",
          { params: TimeFecha }
        );

        if (datos.data === null) {
          this.noHistorial = false;
        } else {
          this.noHistorial = true;
          this.promedioTotal = Number(datos.data.promedioTotal);
          this.DolarToday = Number(datos.data.dolarToday);
          this.LocalBitcoin = Number(datos.data.localBitcoin);
          this.AirTM = Number(datos.data.airTM);
          this.BolivarCucuta = Number(datos.data.bolivarCucuta);
          this.Yadioio = Number(datos.data.yadio_io);
          this.Movicambio = Number(datos.data.movicambio);
          this.Mkambio = Number(datos.data.mkambio);
        }
      } catch (error) {
        console.log("Ocurrio un error ->" + error);
      }finally{
        this.ocultarLoading();
      }
    },
  },
  created() {
    this.getDolar(this.fechaActual, this.horaSelect);
  },
};
</script>

<style lang="scss">
main {
  background-image: url(../../assets/img/bg4.jpg) !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
}
.convertidor {
  background-image: url(../../assets/img/bg2.jpg) !important;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px !important;
  
}
.text-convertidor {
  background-color: rgba(0, 0, 0, 0.507);
  border: 2px solid #f1f1f1;
  border-radius: 20px !important;
  padding-bottom: 5px;
}
.reloj{
  width: 100px;
  padding: 2px;
  margin: 0px !important;
}
.calendario{
  height:  27.3rem !important;
  margin-top: 7px;
}
.box {
  background-color: rgba(0, 0, 0, 0.61);
  font-weight: bold;
  border: 1px solid #f1f1f1;
  border-radius: 20px !important;
  width: 745px;
  padding: 4px;
  margin-bottom: 7px;
}
.resulCambioArriba {
  margin-top: -13px;
}
.mensajeNoHistorial{
  padding: 50px 0 144px 0;
}

@media screen and (max-width: 1264px) {
  .box {
    width: 560px;
    font-size: 15px;
  }
  .resulCambio {
    font-size: 14px;
  }
  .resulCambioArriba {
    margin-top: -13px;
  }
  .convertidor {
    width: 1000px !important;
  }
  .inputSelect {
    font-size: 12px;
  }
}
@media screen and (max-width: 640px) {
  .box {
    width: 400px;
    font-size: 14px;
  }
  .resulCambio {
    font-size: 14px;
  }
  .resulCambioArriba {
    margin-top: -13px;
  }
  .convertidor {
    width: 1000px !important;
  }
  .inputSelect {
    font-size: 12px;
  }
}
@media screen and (max-width: 440px) {
  .box {
    width: 300px;
    font-size: 12px;
  }
  .resulCambio {
    font-size: 13px;
  }
  .resulCambioArriba {
    margin-top: -19px;
  }
  .convertidor {
    width: 1000px !important;
  }
  .inputSelect {
    font-size: 12px;
  }
}</style
>>
