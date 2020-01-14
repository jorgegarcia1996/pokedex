import React from 'react'
import Axios from 'axios'

const BASE_URL = "https://pokeapi.co/api/v2"

class ApiService extends React.Component {

  state = {
    pokemon: []
  }

  getPokemonList() {
    let path = BASE_URL + "/pokemon?limit=1000";
    Axios.get(path).then(res => {
      const pokemon = res.data.results;
      return pokemon;
    })
  }
}

export default ApiService;