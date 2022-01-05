import logo from './logo.svg';
import React from 'react';
import './App.css';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      clicks: 0,
      cliques: 0,
      ois: 0
    };
    this.click = this.click.bind(this);
    this.clique = this.clique.bind(this);
    this.oi = this.oi.bind(this);
  }

  click = () => {
    this.setState((x, _props) => ({
      clicks: x.clicks + 1
    }))
  };

  clique = () => {
    this.setState((x, _props) => ({
      cliques: x.cliques + 1
    }))
  };

  oi = () => {
    this.setState((x, _props) => ({
      ois: x.ois + 1
    }))
  };

  btnColor = (x) => {
    return x % 2 === 0 ? 'green' : 'blue';
  }

  render() {
    const { clicks, cliques, ois } = this.state;
    return (
      <>
        <button
          onClick={this.click}
          style={{ backgroundColor: this.btnColor(clicks), width: '30%', height: '100px', fontSize: '25px' }}
        >
          Clicks = {this.state.clicks}
        </button>
        <button
          onClick={this.clique}
          style={{ backgroundColor: this.btnColor(cliques), width: '30%', height: '100px', fontSize: '25px' }}
        >
          Cliques = {this.state.cliques}
        </button>
        <button
          onClick={this.oi}
          style={{ backgroundColor: this.btnColor(ois), width: '30%', height: '100px', fontSize: '25px' }}
        >
          Ois = {this.state.ois}
        </button>
      </>
    )
  }
}

export default App;
