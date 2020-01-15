import React from 'react';
import './Pokedex.css';
import logo from '../../assets/images/PokedexTitle.png'
import {
  List
} from '../../containers';
import { Button } from '../../components';

class Pokedex extends React.Component {

  render() {
    return(
      <div className="Pokedex">
        <img className="logo" src={logo} alt="Pokedex"/>
        <List/>
        <Button id="up"></Button>
        <Button id="down"></Button>
        <Button id="left"></Button>
        <Button id="right"></Button>
      </div>
    )
  }
}

export default Pokedex;