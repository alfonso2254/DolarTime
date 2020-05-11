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
                  :min="min"
                  :max="max"
                  class="calendario"
                  :scrollable="true"
                  locale="es-011"
                  style="border-radius:20px 1px;"
                  v-model="fechaActual"
                  @change="getDolarHistorico(fechaActual, horaSelect)"
                >
                <v-select
                class="reloj"
                :rounded="true"
                v-model="horaSelect"
                @change="getDolarHistorico(fechaActual, horaSelect)"
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
                    Bs: {{ decimal(historial_promedioTotal, 2, "Bs") }}
                    <small>
                      <small>{{porcentaje_promedioTotal[0]}}</small>
                      {{porcentaje_promedioTotal[1]}}
                    </small>
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
                      {{porcentaje_DolarToday[0]}}
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      {{porcentaje_DolarToday[1]}}
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
                      {{porcentaje_LocalBitcoin[0]}}
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      {{porcentaje_LocalBitcoin[1]}}
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
                      {{porcentaje_AirTM[0]}}
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      {{porcentaje_AirTM[1]}}
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
                      {{porcentaje_BolivarCucuta[0]}}
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      {{porcentaje_BolivarCucuta[1]}}
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
                      {{porcentaje_Yadioio[0]}}
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      {{porcentaje_Yadioio[1]}}
                      {{porcentaje_Yadioio[2]}}
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
                      {{ porcentaje_Movicambio[0] }}
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      {{ porcentaje_Movicambio[1] }}
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
                      {{ porcentaje_Mkambio[0] }}
                    </v-flex>

                    <v-flex xs2 sm3 md3>
                      {{ porcentaje_Mkambio[1] }}
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
      min: '2019-12-10',
      max: '2020-05-08',
      horaSelect: '',
      horaItem: ["9:00 AM", "1:00 PM", "5:00 PM"],
      MonedaSelect: "USD",
      Moneda: [
        { text: "$ Dolares", value: "USD" },
        { text: "Bs Bolivares", value: "BS" },
      ],
      importe: 1,
      //Inicio Variables del dia de hoy
      promedioTotal: 0,
      DolarToday: 0,
      LocalBitcoin: 0,
      AirTM: 0,
      BolivarCucuta: 0,
      Yadioio: 0,
      Movicambio: 0,
      Mkambio: 0,
      horaActual: '',
      diaActual: '',
      mesActual: '',
      añoActual: '',
      //Fin Variables del dia de hoy

      //Inicio variables del dia de ayer para sacar porcentaje
      Ayer_promedioTotal: 0,
      Ayer_DolarToday: 0,
      Ayer_LocalBitcoin: 0,
      Ayer_AirTM: 0,
      Ayer_BolivarCucuta: 0,
      Ayer_Yadioio: 0,
      Ayer_Movicambio: 0,
      Ayer_Mkambio: 0,
      //Fin variables del dia de ayer para sacar porcentaje

      //Inicio Variables historicos
      noHistorial: true,
      historial_promedioTotal: 0,
      historial_DolarToday: 0,
      historial_LocalBitcoin: 0,
      historial_AirTM: 0,
      historial_BolivarCucuta: 0,
      historial_Yadioio: 0,
      historial_Movicambio: 0,
      historial_Mkambio: 0,
      //Fin Variables historicos

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
        result = this.importe * this.historial_promedioTotal;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.historial_promedioTotal;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoDolarToday() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.historial_DolarToday;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.historial_DolarToday;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoLocalBitcoin() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.historial_LocalBitcoin;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.historial_LocalBitcoin;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoAirTM() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.historial_AirTM;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.historial_AirTM;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoBolivarCucuta() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.historial_BolivarCucuta;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.historial_BolivarCucuta;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoYadioio() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.historial_Yadioio;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.historial_Yadioio;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoMovicambio() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.historial_Movicambio;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.historial_Movicambio;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    CalculoMkambio() {
      let result;
      if (this.MonedaSelect === "USD") {
        result = this.importe * this.historial_Mkambio;
        result = this.decimal(result, 2, "Bs");
      } else if (this.MonedaSelect === "BS") {
        result = this.importe / this.historial_Mkambio;
        result = this.decimal(result, 2, "$");
      }
      return result;
    },
    //Inicio Calculo del porcentaje
    porcentaje_promedioTotal (){
      let Actual = this.promedioTotal
      let Historico = this.Ayer_promedioTotal
      let Historial = this.historial_promedioTotal
      let senal
      let n
      let result
      let arrayResult = []
      

      if (Historial == Actual) {
        n      = (Actual - Historico)
        result = ((n*100)/Historico)
      } else {
        n = (Actual - Historial)
        result = ((n*100)/Historial)
      }

      if      (Math.sign(n)== 0) {senal = "="} 
      else if (Math.sign(n)== 1) {senal = "↑"}
      else if (Math.sign(n)== -1) {senal = "↓"}

      arrayResult.push(senal)
      arrayResult.push(this.decimal(result, 2, "%"))

      return arrayResult
    },
    porcentaje_DolarToday(){
      let Actual = this.DolarToday
      let Historico = this.Ayer_DolarToday
      let Historial = this.historial_DolarToday
      let senal
      let n
      let result
      let arrayResult = []
      

      if (Historial == Actual) {
        n      = (Actual - Historico)
        result = ((n*100)/Historico)
      } else {
        n = (Actual - Historial)
        result = ((n*100)/Historial)
      }

      if      (Math.sign(n)== 0) {senal = "="} 
      else if (Math.sign(n)== 1) {senal = "↑"}
      else if (Math.sign(n)== -1) {senal = "↓"}

      arrayResult.push(senal)
      arrayResult.push(this.decimal(result, 2, "%"))

      return arrayResult
    },
    porcentaje_LocalBitcoin(){
      let Actual = this.LocalBitcoin
      let Historico = this.Ayer_LocalBitcoin
      let Historial = this.historial_LocalBitcoin
      let senal
      let n
      let result
      let arrayResult = []
      

      if (Historial == Actual) {
        n      = (Actual - Historico)
        result = ((n*100)/Historico)
      } else {
        n = (Actual - Historial)
        result = ((n*100)/Historial)
      }

      if      (Math.sign(n)== 0) {senal = "="} 
      else if (Math.sign(n)== 1) {senal = "↑"}
      else if (Math.sign(n)== -1) {senal = "↓"}

      arrayResult.push(senal)
      arrayResult.push(this.decimal(result, 2, "%"))

      return arrayResult
    },
    porcentaje_AirTM(){
      let Actual = this.AirTM
      let Historico = this.Ayer_AirTM
      let Historial = this.historial_AirTM
      let senal
      let n
      let result
      let arrayResult = []
      

      if (Historial == Actual) {
        n      = (Actual - Historico)
        result = ((n*100)/Historico)
      } else {
        n = (Actual - Historial)
        result = ((n*100)/Historial)
      }

      if      (Math.sign(n)== 0) {senal = "="} 
      else if (Math.sign(n)== 1) {senal = "↑"}
      else if (Math.sign(n)== -1) {senal = "↓"}

      arrayResult.push(senal)
      arrayResult.push(this.decimal(result, 2, "%"))

      return arrayResult
    },
    porcentaje_BolivarCucuta(){
      let Actual = this.BolivarCucuta
      let Historico = this.Ayer_BolivarCucuta
      let Historial = this.historial_BolivarCucuta
      let senal
      let n
      let result
      let arrayResult = []
      

      if (Historial == Actual) {
        n      = (Actual - Historico)
        result = ((n*100)/Historico)
      } else {
        n = (Actual - Historial)
        result = ((n*100)/Historial)
      }

      if      (Math.sign(n)== 0) {senal = "="} 
      else if (Math.sign(n)== 1) {senal = "↑"}
      else if (Math.sign(n)== -1) {senal = "↓"}

      arrayResult.push(senal)
      arrayResult.push(this.decimal(result, 2, "%"))

      return arrayResult
    },
    porcentaje_Yadioio(){
      let Actual = this.Yadioio
      let Historico = this.Ayer_Yadioio
      let Historial = this.historial_Yadioio
      let senal
      let n
      let result
      let arrayResult = []
      

      if (Historial == Actual) {
        n      = (Actual - Historico)
        result = ((n*100)/Historico)
      } else {
        n = (Actual - Historial)
        result = ((n*100)/Historial)
      }

      if      (Math.sign(n)== 0) {senal = "="} 
      else if (Math.sign(n)== 1) {senal = "↑"}
      else if (Math.sign(n)== -1) {senal = "↓"}

      arrayResult.push(senal)
      arrayResult.push(this.decimal(result, 2, "%"))

      return arrayResult
    },
    porcentaje_Movicambio(){
      let Actual = this.Movicambio
      let Historico = this.Ayer_Movicambio
      let Historial = this.historial_Movicambio
      let senal
      let n
      let result
      let arrayResult = []
      

      if (Historial == Actual) {
        n      = (Actual - Historico)
        result = ((n*100)/Historico)
      } else {
        n = (Actual - Historial)
        result = ((n*100)/Historial)
      }

      if      (Math.sign(n)== 0) {senal = "="} 
      else if (Math.sign(n)== 1) {senal = "↑"}
      else if (Math.sign(n)== -1) {senal = "↓"}

      arrayResult.push(senal)
      arrayResult.push(this.decimal(result, 2, "%"))

      return arrayResult
    },
    porcentaje_Mkambio(){
      let Actual = this.Mkambio
      let Historico = this.Ayer_Mkambio
      let Historial = this.historial_Mkambio
      let senal
      let n
      let result
      let arrayResult = []
      

      if (Historial == Actual) {
        n      = (Actual - Historico)
        result = ((n*100)/Historico)
      } else {
        n = (Actual - Historial)
        result = ((n*100)/Historial)
      }

      if      (Math.sign(n)== 0) {senal = "="} 
      else if (Math.sign(n)== 1) {senal = "↑"}
      else if (Math.sign(n)== -1) {senal = "↓"}

      arrayResult.push(senal)
      arrayResult.push(this.decimal(result, 2, "%"))

      return arrayResult
    },
    //Fin Calculo del porcentaje

  },
  methods: {
   
    ...mapMutations(['mostrarLoading', 'ocultarLoading']),
   
    decimal(value, n, simbolo) {
      let val = value.toFixed(n).replace(".", ",") + " " + simbolo;
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    async getDolar(){
      let datos = await axios.get('https://monitordolar.com/api/index.php?action=ver')
      
      //Inicio datos del dia de hoy
      let json = datos.data.actual
      this.promedioTotal = Number(json.promedioTotal)
      this.DolarToday    = Number(json.dolarToday)
      this.LocalBitcoin  = Number(json.localBitcoin)
      this.AirTM         = Number(json.airTM)
      this.BolivarCucuta = Number(json.bolivarCucuta)
      this.Yadioio       = Number(json.yadio_io)
      this.Movicambio    = Number(json.movicambio)
      this.Mkambio       = Number(json.mkambio)
      this.horaActual    = json.hora
      let fechaJson      = json.created_at
      let arrayFecha     = fechaJson.split('-')
      let arrayDia       = arrayFecha[2].split(' ')
      this.añoActual     = arrayFecha[0]
      this.mesActual     = arrayFecha[1]
      this.diaActual     = arrayDia[0]
      //Fin datos del dia de hoy

      

      //Inicio datos de ayer para sacar porcentaje
      let AyerJson = datos.data.historial
      this.Ayer_promedioTotal = Number(AyerJson.promedioTotal)
      this.Ayer_DolarToday    = Number(AyerJson.dolarToday)
      this.Ayer_LocalBitcoin  = Number(AyerJson.localBitcoin)
      this.Ayer_AirTM         = Number(AyerJson.airTM)
      this.Ayer_BolivarCucuta = Number(AyerJson.bolivarCucuta)
      this.Ayer_Yadioio       = Number(AyerJson.yadio_io)
      this.Ayer_Movicambio    = Number(AyerJson.movicambio)
      this.Ayer_Mkambio       = Number(AyerJson.mkambio)
      //Fin datos de ayer para sacar porcentaje

      
      //Inicio datos del historico
      this.historial_promedioTotal  = this.promedioTotal
      this.historial_DolarToday     = this.DolarToday
      this.historial_LocalBitcoin   =  this.LocalBitcoin 
      this.historial_AirTM          = this.AirTM        
      this.historial_BolivarCucuta  =  this.BolivarCucuta
      this.historial_Yadioio        =  this.Yadioio      
      this.historial_Movicambio     =  this.Movicambio   
      this.historial_Mkambio        =  this.Mkambio      

      this.fechaActual = this.añoActual+'-'+this.mesActual+'-'+this.diaActual
      this.horaSelect  = this.horaActual 
      //Fin datos del historico


    },
    async getDolarHistorico(fecha1, hora) {
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
          this.historial_promedioTotal = Number(datos.data.promedioTotal);
          this.historial_DolarToday = Number(datos.data.dolarToday);
          this.historial_LocalBitcoin = Number(datos.data.localBitcoin);
          this.historial_AirTM = Number(datos.data.airTM);
          this.historial_BolivarCucuta = Number(datos.data.bolivarCucuta);
          this.historial_Yadioio = Number(datos.data.yadio_io);
          this.historial_Movicambio = Number(datos.data.movicambio);
          this.historial_Mkambio = Number(datos.data.mkambio);
        }
      } catch (error) {
        console.log("Ocurrio un error ->" + error);
      }finally{
        this.ocultarLoading();
      }
    },
  },
  created() {
    this.getDolar()
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
.resulCambio {
   margin-bottom: 5px;
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
