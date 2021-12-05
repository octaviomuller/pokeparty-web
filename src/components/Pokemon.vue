<template>
  <v-card class="rounded-bl-0 rounded-xl">
    <v-card-title style="font-size:2em">
      #35 - Clefary
    </v-card-title>
    <div class="ma-5">
      <v-row justify="center" align="center">
        <v-col cols="4">
          <v-row justify="center">
            <v-img
              class="my-6"
              max-width="60%"
              contain
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
            ></v-img>
          </v-row>
          <v-row justify="center">
            <div class="text-center">
              <v-chip
                class="ma-2"
                color="pink"
              >
                FAIRY
              </v-chip>
            </div>
          </v-row>
        </v-col>

        <v-col cols="4">
          <div class="small">
            <line-chart></line-chart>
          </div>
        </v-col>

        <v-col cols="4">
          <v-card color="secondary" class="my-6 rounded-lg d-flex align-center justify-center" height="11vh">
            <div>
              <v-row justify="center">
                <h3>Abilities</h3>
              </v-row>
              <v-row justify="center">
                <div class="text-center">
                  <v-chip
                    class="ma-2"
                    color="grey"
                  >
                    cute-charm
                  </v-chip>
                </div>
                <div class="text-center">
                  <v-chip
                    class="ma-2"
                    color="grey"
                  >
                    magic-guard
                  </v-chip>
                </div>
              </v-row>
            </div>
          </v-card>

          <v-card color="secondary" class="my-6 rounded-lg d-flex align-center justify-center" height="11vh">
            <div>
              <v-row justify="center">
                <h3>Height</h3>
              </v-row>
              <v-row justify="center">
                <div class="text-center">
                  <h4>40</h4>
                </div>
              </v-row>
            </div>
          </v-card>

          <v-card color="secondary" class="my-6 rounded-lg d-flex align-center justify-center" height="11vh">
            <div>
              <v-row justify="center">
                <h3>Weight</h3>
              </v-row>
              <v-row justify="center">
                <div class="text-center">
                  <h4>40</h4>
                </div>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import LineChart from './LineChart.vue'

export default {
  components: {
    LineChart
  }
}
</script>

<style>
  .small {
    max-width: 300px;
    margin-bottom: 5%;
  }
</style>
