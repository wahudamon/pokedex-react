let nextPokemonsData = '';

export const getAllPokemon = async () => {
  let pokemonName = '';
  if(nextPokemonsData) {
    pokemonName = await fetching(nextPokemonsData);
  } else {
    pokemonName = await fetching('https://pokeapi.co/api/v2/pokemon-form?offset=1&limit=12');
  }
  nextPokemonsData = pokemonName.next;
  const pokemonArray = [];
  for(let i = 0; i < pokemonName.results.length; i++) {
    const pokemon = pokemonName.results[i];
    const pokemonImage = await fetching(pokemon.url);
    const pokemonObj = {
      name: pokemon.name,
      image: pokemonImage.sprites.front_default
    }
    pokemonArray.push(pokemonObj);
  }

  return pokemonArray;
}

export const getPokemonDetails = async (pokeName) => {
  const data = await fetching('https://pokeapi.co/api/v2/pokemon/'.concat(pokeName));
  return data;
}

const fetching = async (url) => {
  const data = await fetch(url);
  const body = data.json();

  if(!data.ok) {
    throw new Error(data.statusText);
  }

  return body;
}
