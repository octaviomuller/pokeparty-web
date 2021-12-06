<template>
  <v-card class="rounded-bl-0 rounded-xl my-4">
    <v-card-title style="font-size:2em">
      #{{pokemon.id}} - {{pokemon.name}}
    </v-card-title>
    <div class="ma-5">
      <v-row justify="center" align="center">
        <v-col cols="4">
          <v-row justify="center">
            <v-img
              class="my-6"
              max-width="60%"
              contain
              :src="pokemon.image"
            ></v-img>
          </v-row>
          <v-row justify="center">
            <div class="text-center" v-for="(type, index) in pokemon.types" :key="index">
              <v-chip
                class="ma-2"
                :color="getTypeColor(type)"
              >
                {{ type.toUpperCase() }}
              </v-chip>
            </div>
          </v-row>
        </v-col>

        <v-col cols="4">
          <div class="small">
            <Chart :chart-data="datacollection" :options="getChartOptions"></Chart>
          </div>
        </v-col>

        <v-col cols="4">
          <v-card color="secondary" class="my-6 rounded-lg d-flex align-center justify-center" height="16vh" width="20vw">
            <div>
              <v-row justify="center">
                <h3>Abilities</h3>
              </v-row>
              <v-row justify="center">
                <div class="text-center" v-for="(ability, index) in pokemon.abilities" :key="index">
                  <v-chip
                    class="ma-2"
                    color="grey"
                  >
                    {{ability}}
                  </v-chip>
                </div>
              </v-row>
            </div>
          </v-card>

          <v-card color="secondary" class="my-6 rounded-lg d-flex align-center justify-center" height="11vh" width="20vw">
            <div>
              <v-row justify="center">
                <h3>Height</h3>
              </v-row>
              <v-row justify="center">
                <div class="text-center">
                  <h4>{{pokemon.height}}</h4>
                </div>
              </v-row>
            </div>
          </v-card>

          <v-card color="secondary" class="my-6 rounded-lg d-flex align-center justify-center" height="11vh" width="20vw">
            <div>
              <v-row justify="center">
                <h3>Weight</h3>
              </v-row>
              <v-row justify="center">
                <div class="text-center">
                  <h4>{{pokemon.weight}}</h4>
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
import Chart from './Chart.vue'

export default {
  props: ['pokemon'],
  data () {
    return {
      datacollection: null
    }
  },
  components: {
    Chart
  },
  methods: {
    getTypeColor (type) {
      return this.$store.getters.getTypeColor(type)
    },
    setDatacollection () {
      this.datacollection = {
        labels: [
          'HP',
          'Attack',
          'Defense',
          'Special Attack',
          'Special Defense',
          'Speed'
        ],
        datasets: [
          {
            data: Object.values(this.pokemon.stats),
            fill: true,
            backgroundColor: 'rgba(145, 145, 145, 1)'
          }
        ]
      }
    }
  },
  watch: {
    pokemon: function () {
      this.setDatacollection()
    }
  },
  computed: {
    getChartOptions () {
      return {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 200,
              stepSize: 25,
              reverse: false,
              beginAtZero: true
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.setDatacollection()
  }
}
</script>

<style>
  .small {
    max-width: 300px;
    margin-bottom: 5%;
  }
</style>
