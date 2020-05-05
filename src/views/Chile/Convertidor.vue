<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col md="8">
        <v-card height="400">
          <v-container>
            <v-row>
              <v-col md="3">
                <v-text-field
                  :clearable="true"
                  :rules="[rules.required, rules.min]"
                  :rounded="true"
                  label="Importe"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col md="3">
                <v-select
                  :clearable="true"
                  :rounded="true"
                  :items="items"
                  label="De"
                  outlined
                ></v-select>
              </v-col>

              <v-col md="3">
                <v-select
                  :clearable="true"
                  :rounded="true"
                  :items="items"
                  label="Para"
                  outlined
                ></v-select>
              </v-col>

              <v-col md="3">
                <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: ["Peso chileno", "Dolar"],
      rules: {
          required: value => !!value || 'Requerido',
          min: v => v.length >= 1 || 'Minimo 1 valor.',
          emailMatch: () => ('The email and password you entered don\'t match'),
        }   
    };
  },
};
</script>

<style></style>
