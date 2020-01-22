import React from "react";
import "./ListItem.css";

import { getAllPokemonDetails } from '../../redux/actions/pokemonActions';
import { connect } from "react-redux";

class ListItem extends React.Component {
  
  componentDidMount() {
    this.props.getAllPokemonDetails(this.props.id);
  }
  
  render() {
    const {id, pokemon} = this.props;
    let image, name;
    const pokeId = "pokemon" + id;
    
    if (pokemon !== undefined && id === pokemon.id) {
      image = pokemon.sprites.front_default;
      name = pokemon.name;
    }
    
    return (
      <div id={pokeId} className="ListItem">
        <img className="pokemonImage" src={image} alt={name} />
        <p className="pokemonName">
          {id} - {name}
        </p>
      </div>
    );
  }
}

function mapState(state, ownProps) {
  return {
    pokemon: state.pokemonDetailsReducer.all_details[ownProps.id]
  }
};

const mapDispatch = {
  getAllPokemonDetails
}

export default connect(mapState, mapDispatch)(ListItem);
