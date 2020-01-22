import React from "react";
import "./Button.css";

let scrollY = -80;
let nextPokemon = 1;

class Button extends React.Component {

  scroll = action => {
    let temp = document.getElementById("lista");
    let lastPokemon = nextPokemon;

    if (!!temp) {
      switch (action) {
        case "up":
          if (nextPokemon > 1) {
            nextPokemon--;
          } else {
            nextPokemon = 1;
          }
          if (scrollY >= 0) {
            scrollY -= 80;
            temp.scrollTo(0, scrollY);
          }
          break;

        case "down":
          if (nextPokemon < 151) {
            nextPokemon++;
          } else {
            nextPokemon = 151;
          }
          if (scrollY < 11885) {
            scrollY += 80;
            temp.scrollTo(0, scrollY);
          }
          break;

        default:
          break;
      }

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
    }
  };

  render() {
    const { id } = this.props;
    return (
      <div
        id={id}
        onClick={() => {
          this.scroll(id);
          this.props.update(nextPokemon);
        }}
        className="Button"
      ></div>
    );
  }
}

export default Button;
