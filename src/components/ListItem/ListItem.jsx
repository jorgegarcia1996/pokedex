import React from "react";
import "./ListItem.css";
import Api from "../../services/ApiService";

class ListItem extends React.Component {
  state = {
    pokemon: []
  };

  componentDidMount() {
    Api.getPokemon(this.props.id).then(() => {
      const pokemon = Api.state.pokemon;
      this.setState({ pokemon });
    });
  }

  loadImage() {
    let image;
    if (!!this.state.pokemon.sprites) {
      image = this.state.pokemon.sprites["front_default"];
    }
    return image;
  }

  render() {
    const {pokemon} = this.state;
    return (
      <div className="ListItem">
        <img className="pokemonImage" src={this.loadImage()} alt="" />
        <p className="pokemonName">
          {pokemon.id} - {pokemon.name}
        </p>
      </div>
    );
  }
}

export default ListItem;
