import React from "react";
import "./App.css";

import Players from "./components/Players";

class App extends React.Component {
  state = { players: [], favPlayers: [] };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
      .catch(err => console.log(err));
  }

  updateFavPlayers = newFavList =>
    this.setState({ ...this.state, favPlayers: newFavList });

  render() {
    return (
      <Players
        players={this.state.players}
        updateFavPlayers={this.updateFavPlayers}
      />
    );
  }
}

export default App;
