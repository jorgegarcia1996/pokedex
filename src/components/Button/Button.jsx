import React from "react";
import "./Button.css";
import Api from "../../services/ApiService";

let scrollY = -80;

class Button extends React.Component {
  scroll = action => {
    let temp = document.getElementById("lista");
    if (!!temp) {
      switch (action) {
        case "up":
          if (scrollY >= 0) {
            scrollY -= 80;
            temp.scrollTo(0, scrollY);
          }
          break;

        case "down":
          if (scrollY < 11885) {
            scrollY += 80;
            temp.scrollTo(0, scrollY);
          }
          break;
        default:
          break;
      }
    }
  };

  render() {
    return (
      <div
        id={this.props.id}
        onClick={() => {
          Api.selectPokemon(this.props.id);
          this.scroll(this.props.id);
          this.props.update()
        }}
        className="Button"
      ></div>
    );
  }
}

export default Button;
