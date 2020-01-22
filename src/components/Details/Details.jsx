import React from "react";
import "./Details.css";
import { connect } from "react-redux";

class Details extends React.Component {

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

  render() {
    const { id, pokemon } = this.props;
    let name, types, height, weight, abilities;
    
    if (pokemon !== undefined && id === pokemon.id) {
      name = this.getName(pokemon);
      types = this.getTypes(pokemon);
      height = this.getHeight(pokemon);
      weight = this.getWeight(pokemon);
      abilities = this.getAbilities(pokemon);
    }

    return (
      <div id="deta" className="Details">
        <p>Name: {name}</p>
        <p>Type: {types}</p>
        <p>Height: {height} cm</p>
        <p>Weight: {weight} kg</p>
        <p>Abilities: {abilities}</p>
      </div>
    );
  }
}

function mapState(state, ownProps) {
  return {
    pokemon: state.pokemonDetailsReducer.all_details[ownProps.id]
  };
}

export default connect(mapState)(Details);
