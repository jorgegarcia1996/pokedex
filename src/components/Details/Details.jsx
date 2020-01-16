import React from "react";
import "./Details.css";
import Api from "../../services/ApiService";

class Details extends React.Component {
  state = {
    pokemon: []
  };

  getName = pokemon => {
    return pokemon.name;
  };

  getTypes = pokemon => {
    let types = [];
    if (!!pokemon.types) {
      pokemon.types.forEach(t => {
        types.push(" " + t.type.name);
      });
    }
    return types;
  };

  getHeight = pokemon => {
    return pokemon.height * 10;
  };

  getWeight = pokemon => {
    return pokemon.weight / 10;
  };

  getAbilities = pokemon => {
    let abilities = [];
    if (!!pokemon.abilities) {
      pokemon.abilities.forEach(a => {
        abilities.push(" " + a.ability.name);
      });
    }
    return abilities;
  };

  getDetails = async () => {
    await new Promise(r => setTimeout(r, 10));
    Api.getDetails(Api.state.nextPokemon).then(() => {
      const pokemon = Api.state.pokemonDetails;
      this.setState({ pokemon });
    });
  };

  componentDidMount() {
    this.getDetails();
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    this.getDetails();
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div id="deta" className="Details">
        <p>Name: {this.getName(pokemon)}</p>
        <p>Type: {this.getTypes(pokemon)}</p>
        <p>Height: {this.getHeight(pokemon)} cm</p>
        <p>Weight: {this.getWeight(pokemon)} kg</p>
        <p>Abilities: {this.getAbilities(pokemon)}</p>
      </div>
    );
  }
}

export default Details;
