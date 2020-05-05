<template>
  <v-container>
    <v-layout :justify-center="true" row wrap>
      <v-flex  xs10 sm6 md7 lg5>
        <v-date-picker style="border-radius:20px 1px;" v-model="fecha" full-width>
          <v-select
          class="reloj"
            :rounded="true"
            v-model="horaI"
            :items="hora"
            outlined
            color="primary"
            append-icon="fas fa-stopwatch"
            dense
            item-color="primary"
          ></v-select>
        </v-date-picker>
      </v-flex>
    </v-layout>

    <v-layout :justify-center="true"  mt-4>
      <v-flex md12>
        <v-card class="convertidor" dark>
          <v-layout
            class="text-convertidor"
            :align-center="true"
            :column="true"
          >
            <v-card-title ><h2>MonitorDolar.com</h2></v-card-title>
            <v-flex class="resulCambio resulCambioArriba"><h3>{{fecha}} 1:00 PM</h3></v-flex>
            <v-flex class="resulCambio"><h1>Bs: 177.403,00</h1></v-flex>

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
                  v-model.number="importe "
                  :value="bs"
                  hint="Importe a cambiar"
                  append-icon="fas fa-globe-americas"
                  item-color="primary"
                  dense
                  class="inputSelect"
                  type="number"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-flex class="resulCambio resulCambioArriba"><h1>{{ importeResult  }} =</h1></v-flex>

            <v-flex class="resulCambio"><h1>{{ CambioResult }}</h1></v-flex>

            <v-layout  class="text-center" :column="true">

              <v-layout :row="true" class="box">
                
                <v-flex xs3 sm3 md3>
                  DolarToday
                </v-flex>

                <v-flex sx5 sm5 md5>
                  180.065.,00 Bs
                </v-flex>

                <v-flex xs1 sm1 md1>
                  ↓
                </v-flex>
                
                <v-flex xs2 sm3 md3>
                  -100,15%
                </v-flex>
             
              </v-layout>

              <v-layout :row="true" class="box">
                
                <v-flex xs4 sm3 md3>
                  LocalBitcoin (BTC)
                </v-flex>

                <v-flex sx5 sm5 md5>
                  185.004,00 Bs
                </v-flex>

                <v-flex xs1 sm1 md1>
                  ↓
                </v-flex>
                
                <v-flex xs2 sm3 md3>
                  -0,15%
                </v-flex>
             
              </v-layout>
              <v-layout :row="true" class="box">
                
                <v-flex xs3 sm3 md3>
                  AirTM
                </v-flex>

                <v-flex sx5 sm5 md5>
                  185.004,00 Bs
                </v-flex>

                <v-flex xs1 sm1 md1>
                  ↓
                </v-flex>
                
                <v-flex xs2 sm3 md3>
                  -0,15%
                </v-flex>
             
              </v-layout>
              <v-layout :row="true" class="box">
                
                <v-flex xs3 sm3 md3>
                  Bolivar Cucuta
                </v-flex>

                <v-flex sx5 sm5 md5>
                  185.004,00 Bs
                </v-flex>

                <v-flex xs1 sm1 md1>
                  ↓
                </v-flex>
                
                <v-flex xs2 sm3 md3>
                  -0,15%
                </v-flex>
             
              </v-layout>
              <v-layout :row="true" class="box">
                
                <v-flex xs3 sm3 md3>
                  Yadio.io
                </v-flex>

                <v-flex sx5 sm5 md5>
                  185.004,00 Bs
                </v-flex>

                <v-flex xs1 sm1 md1>
                  ↓
                </v-flex>
                
                <v-flex xs2 sm3 md3>
                  -0,15%
                </v-flex>
             
              </v-layout>
              <v-layout :row="true" class="box">
                
                <v-flex xs3 sm3 md3>
                  Movicambio
                </v-flex>

                <v-flex sx5 sm5 md5>
                  185.004,00 Bs
                </v-flex>

                <v-flex xs1 sm1 md1>
                  ↓
                </v-flex>
                
                <v-flex xs2 sm3 md3>
                  -0,15%
                </v-flex>
             
              </v-layout>
              <v-layout  :row="true" class="box">
                
                <v-flex xs3 sm3 md3>
                  Mkambio
                </v-flex>

                <v-flex sx5 sm5 md5>
                  185.004,00 Bs
                </v-flex>

                <v-flex xs1 sm1 md1>
                  ↓
                </v-flex>
                
                <v-flex xs2 sm3 md3>
                  -0,15%
                </v-flex>
             
              </v-layout>
            </v-layout>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fecha: new Date().toISOString().substr(0, 10),
      horaI: "9:00 AM",
      hora: ["9:00 AM", "1:00 PM", "5:00 PM"],
      MonedaSelect: "USD",
      Moneda: [
        { text: "$ Dolares", value: "USD" },
        { text: "Bs Bolivares", value: "BS" },
      ],
      iconUSD: "dollar-sign",
      iconBS: "dollar-sign",
      dolarDatos: 177403,
      bs: 1,
      usd: 1,
      importe: 1

    };
  },
  computed: {
    CambioResult() {
      let cero = 0
      let importee = this.importe
      let usdd = this.usd
      let dolarDatoss = this.dolarDatos
      let MonedaSelectt= this.MonedaSelect

      let result
      
      if (MonedaSelectt === 'USD') {
          result = importee * dolarDatoss
          result = this.decimal(result, 2, "Bs")
      }
      else if (MonedaSelectt === 'BS'){
          result = importee / dolarDatoss
          result = this.decimal(result, 2 , '$')
      }
      return result;
    },
    importeResult(){
      let MonedaSelectt = this.MonedaSelect
      let resultImport = this.importe
      let result1
      

      if (MonedaSelectt  === 'USD') {
        result1 = this.decimal(resultImport, 2, '$')
      }
      else if (MonedaSelectt  === 'BS') {
        result1 = this.decimal(resultImport, 2, 'Bs')
      }
      return result1
    }
  },
  methods:{
    decimal(value, n, simbolo){
      let val =  value.toFixed(n).replace('.',',') + ' ' + simbolo
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
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
.box {
  background-color: rgba(0, 0, 0, 0.61);
  font-weight: bold;
  border: 1px solid #f1f1f1;
  border-radius: 20px !important;
  width: 600px;
  padding: 4px;
  margin-bottom: 7px;
}
.reloj {
  position: absolute;
  right: 15px !important;
  margin-top: -7px !important;
  width: 200px;
  
}
.esquinaCalendario{
  border-bottom-right-radius: 50px;
}
.resulCambioArriba{
  margin-top: -13px;
}

@media screen and (max-width: 640px){
.box{
  width: 400px;
  font-size: 14px;

}
.resulCambio{
  font-size: 14px;
}
.resulCambioArriba{
  margin-top: -13px;
}
.convertidor{
  width: 1000px !important;
}
.inputSelect{
  font-size: 12px;
}
}
@media screen and (max-width: 440px){
.box{
  width: 300px;
  font-size: 12px;

}
.resulCambio{
  font-size: 13px;
}
.resulCambioArriba{
  margin-top: -19px;
}
.convertidor{
  width: 1000px !important;
}
.inputSelect{
  font-size: 12px;
}
}
</style
>>
