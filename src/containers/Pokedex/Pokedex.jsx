import React from 'react';
import './Pokedex.css';
import logo from '../../assets/images/PokedexTitle.png'
import {
  List
} from '../../containers';
import { Button, Details } from '../../components';
import Api from '../../services/ApiService';

class Pokedex extends React.Component {

  state = {
    x: null,
    num: 1
  }

  updateDetails = () => {
    this.setState({x: Date.now()});
  }

  render() {
    console.log(this.state.x);
    return(
      <div id="poke" className="Pokedex">
        <img className="logo" src={logo} alt="Pokedex"/>
        <List/>
        <Details id={Api.state.nextPokemon}/>
        <Button update={() => this.updateDetails()} id="up"></Button>
        <Button update={() => this.updateDetails()} id="down"></Button>
        <Button id="left"></Button>
        <Button id="right"></Button>
      </div>
    )
  }
}

export default Pokedex;