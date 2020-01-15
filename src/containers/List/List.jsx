import React from "react";
import "./List.css";
import Api from "../../services/ApiService";
import { ListItem } from "../../components";

class List extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    Api.getPokemonList().then(() => {
      const list = Api.state.list;
      this.setState({ list });
    });
  }

  render() {
    return (
      <div id="lista" className="List">
        {this.state.list.map(p => (
          <ListItem key={p.entry_number} id={p.entry_number}></ListItem>
        ))}
      </div>
    );
  }
}

export default List;
