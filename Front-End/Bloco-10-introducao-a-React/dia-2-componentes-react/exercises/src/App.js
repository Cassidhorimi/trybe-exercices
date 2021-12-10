import './App.css';
import pokemons from './data';
import Pokemon from './pokemon';
import PropTypes from 'prop-types'

function App() {
  return (
    <>
      <main className='pokedex'>

      {pokemons.map((pokemon) => {
        return <Pokemon key={pokemon.id} pokemon={pokemon}/>
      })}

      </main>
    </>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default App;
