import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }
  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({ characters: data.results })
      });
  }

  render() {
    const { characters } = this.state;
    const c = (
      characters.map(({ name, image }) => {
        return (
          <div className="container" key={name}>
            <h3>
              {name}
            </h3>
            <img src={image} alt={name} />
          </div>
        )
      })
    );
    const loading = <span>Loading...</span>
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters ? c : loading}
        </div>
      </div>
    )
  }
}

export default App;
