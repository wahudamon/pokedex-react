// export const getAllPokemon = async () => {
//   const data = await fetching('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10');
//   return data.results;
// }

// Alur ambil data per 10 pokemon
// ambil data 10 pokemon pertama -> simpan next value nya di sebuah variabel -> tampilkan 10 pokemon pertama -> tekan tombol load more -> panggil function getAllPokemon dengan parameter next value -> ambil data 10 pokemon selanjutnya -> gabungkan dengan data 10 pokemon sebelumnya -> tampilkan data pokemon yang sudah digabungkan

// export const getAllPokemon = async () => {
//   const pokemonName = await fetching('https://pokeapi.co/api/v2/pokemon-form?limit=12&offset=1');
//   const pokemonArray = [];
//   for(let i = 0; i < pokemonName.results.length; i++) {
//     const pokemon = pokemonName.results[i];
//     const pokemonImage = await fetching(pokemon.url);
//     const pokemonObj = {
//       name: pokemon.name,
//       image: pokemonImage.sprites.front_default
//     }
//     pokemonArray.push(pokemonObj);
//   }

//   return pokemonArray;
// }

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
