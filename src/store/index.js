import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [],
    page: 1,
    typeColors: {
      normal: 'grey',
      fire: 'orange',
      water: 'blue',
      grass: 'light-green',
      electric: 'yellow accent-4',
      ice: 'light-blue',
      fighting: 'deep-orange darken-4',
      poison: 'purple',
      rock: 'orange lighten-1',
      flying: 'cyan darken-1',
      psychic: 'pink',
      bug: 'lime darken-1',
      ground: 'amber lighten-2',
      ghost: 'deep-purple',
      dark: 'grey darken-3',
      dragon: 'indigo darken-4',
      steel: 'blue-grey lighten-1',
      fairy: 'pink lighten-3'
    }
  },
  mutations: {
    setPokemons (state, payload) {
      state.pokemons = payload
    },
    setPage (state, payload) {
      state.page = payload
    }
  },
  actions: {
    async getPokemons ({ commit }) {
      const { data } = await axios.get('https://pokeparty-server.herokuapp.com/pokemons')

      commit('setPokemons', data)
    }
  },
  getters: {
    getPokemons: (state) => state.pokemons.slice((state.page * 6) - 6, state.page * 6),
    getTotalPages: (state) => Math.floor(state.pokemons.length / 6),
    getPage: (state) => state.page,
    getTypeColor: (state) => (color) => state.typeColors[color]
  }
})
