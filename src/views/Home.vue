<template>
  <v-container>
    <v-row v-for="(pokemon, index) in pokemons" :key="index" justify="center">
      <Pokemon :pokemon="pokemon"/>
    </v-row>
    <div class="text-center">
      <v-pagination
        dark
        v-model="page"
        :length="totalPages"
        :total-visible="7"
        color="secondary"
        @input="onPageChange"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import Pokemon from '@/components/Pokemon'

export default {
  components: {
    Pokemon
  },
  data () {
    return {
      page: 1
    }
  },
  methods: {
    onPageChange (page) {
      this.page = page
      this.$store.commit('setPage', page)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  computed: {
    pokemons () {
      return this.$store.getters.getPokemons
    },
    totalPages () {
      return this.$store.getters.getTotalPages
    }
  },
  mounted () {
    this.page = this.$store.getters.getPage
    this.$store.dispatch('getPokemons')
  }
}
</script>
