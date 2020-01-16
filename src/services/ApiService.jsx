import Axios from "axios";
import { Container } from "unstated";

const BASE_URL = "https://pokeapi.co/api/v2";

export class ApiService extends Container {
  constructor() {
    super();
    this.state = {
      list: [],
      pokemon: [],
      pokemonDetails: [],
      lastPokemon: 1,
      nextPokemon: 1
    };
  }

  selectPokemon = action => {
    const { lastPokemon } = this.state;
    let nextPokemon = lastPokemon;
    switch (action) {
      case "up":
        if (lastPokemon > 1) {
          this.setState({ lastPokemon: lastPokemon - 1 });
          nextPokemon--;
        } else {
          nextPokemon = 1;
        }
        break;
      case "down":
        if (lastPokemon < 151) {
          this.setState({ lastPokemon: lastPokemon + 1 });
          nextPokemon++;
        } else {
          nextPokemon = 151;
        }
        break;
      default:
        break;
    }
    
    console.log("TCL: ApiService -> nextPokemon", nextPokemon)
    this.setState({nextPokemon});
    
    let pokeIdNext = "pokemon" + nextPokemon.toString();
    let pokeIdLast = "pokemon" + lastPokemon.toString(); 
    const temp1 = document.getElementById(pokeIdNext);
    const temp2 = document.getElementById(pokeIdLast);
    if (!!temp2) {
      temp2.style.backgroundColor = "transparent";
    }
    if (!!temp1) {
      temp1.style.backgroundColor = "#f29435";
      
    }
  };
  
  

  getDetails = async id => {
    let path = BASE_URL + "/pokemon/" + id;
    await Axios.get(path).then(res => {
      const pokemonDetails = res.data;
      this.setState({ pokemonDetails });
    });
  }

  getPokemonList = async () => {
    let path = BASE_URL + "/pokedex/kanto";
    await Axios.get(path).then(res => {
      const list = res.data.pokemon_entries;
      this.setState({ list });
    });
  };
  
  getPokemon = async id => {
    let path = BASE_URL + "/pokemon/" + id;
    await Axios.get(path).then(res => {
      const pokemon = res.data;
      this.setState({ pokemon });
    });
  };
}

const Api = new ApiService();

export default Api;
