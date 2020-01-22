import React from "react";
import "./List.css";
import { ListItem } from "../../components";
import { connect } from "react-redux";
import { getAllPokemonList } from "../../redux/actions/pokemonActions";

class List extends React.Component {
  componentDidMount() {
    this.props.getAllPokemonList();
  }

  render() {
    const { list } = this.props;

    return (
      <div id="lista" className="List">
        {list.map(p => (
          <ListItem key={p.entry_number} id={p.entry_number}/>
        ))}
      </div>
    );
  }
}

function mapState(state) {
  return {
    list: state.pokemonListReducer.list
  };
}

const mapDispatch = {
  getAllPokemonList
};

export default connect(mapState, mapDispatch)(List);
