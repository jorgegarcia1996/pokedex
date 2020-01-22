import React from 'react';
import './Pokedex.css';
import logo from '../../assets/images/PokedexTitle.png'
import {
  List
} from '../../containers';
import { Button, Details } from '../../components';

class Pokedex extends React.Component {

  state = {
    nextPokemon: 1
  }

  updateDetails = nextPokemon => {
    this.setState({nextPokemon});
  }

  render() {
    return(
      <div id="poke" className="Pokedex">
        <img className="logo" src={logo} alt="Pokedex"/>
        <List/>
        <Details id={this.state.nextPokemon}/>
        <Button update={nextPokemon => this.updateDetails(nextPokemon)} id="up"></Button>
        <Button update={nextPokemon => this.updateDetails(nextPokemon)} id="down"></Button>
      </div>
    )
  }
}

export default Pokedex;