// export const getAllPokemon = async () => {
//   const data = await fetching('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10');
//   return data.results;
// }

export const getAllPokemon = async () => {
  const pokemonName = await fetching('https://pokeapi.co/api/v2/pokemon-form?limit=10&offset=10');
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

const fetching = async (url) => {
  const data = await fetch(url);
  const body = data.json();

  if(!data.ok) {
    throw new Error(data.statusText);
  }

  return body;
}