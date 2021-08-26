import '../App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../utils/getPokemonList';

function WildPokemonList() {
  const [wildPokemon, getWildPokemon] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const res = await getAllPokemon();
      getWildPokemon(res);
    }

    fetching();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {wildPokemon.map(pokemon => (
          <p>{pokemon.name}</p>
        ))}
      </header>
    </div>
  )
}

export default WildPokemonList;