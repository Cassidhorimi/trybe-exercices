import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <section className='pokemon'>
        <h4>{this.props.pokemon.name}</h4>
        <p>{this.props.pokemon.type}</p>
        <p>Avarege weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
        <img src={this.props.pokemon.image} alt=""></img>
        <a href={this.props.pokemon.moreInfo} target="blank" className='link'>More info</a>
      </section>
    )
  }
}

export default Pokemon;
