import Axios from 'axios'
import { Container } from "unstated";

const BASE_URL = "https://pokeapi.co/api/v2"

export class ApiService extends Container {

  constructor() {
    super();
    this.state = {
      list: [],
      pokemon: []
    };
  }

  getPokemonList = async () => {
    let path = BASE_URL + "/pokedex/kanto";
    await Axios.get(path).then(res => {
      const list = res.data.pokemon_entries;
      this.setState({list});
    })
  }

  getPokemon = async id => {
    let path = BASE_URL + "/pokemon/" + id;
    await Axios.get(path).then(res => {
      const pokemon = res.data;
      this.setState({pokemon});
    })
  }
}

const Api = new ApiService();

export default Api;