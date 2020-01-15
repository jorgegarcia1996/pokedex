import React from 'react';
import './Button.css';

let scrollY = 0;

class Button extends React.Component {

  scroll = action => {
    let temp = document.getElementById("lista");
    if (!!temp) {
      switch (action) {
        case "up":
          if (scrollY > 0) {
            scrollY -= 80;
            temp.scrollTo(0, scrollY);
          }
          break;
        
        case "down":
          if (scrollY < 11300) {
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
    return(
      <div id={this.props.id} onClick={() => this.scroll(this.props.id)} className="Button">
      </div>
    )
  }
}

export default Button;