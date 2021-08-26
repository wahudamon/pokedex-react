export const getAllPokemon = async () => {
  const data = await fetching('https://pokeapi.co/api/v2/pokemon?limit=100&offset=100');
  return data.results;
}

const fetching = async (url) => {
  const data = await fetch(url);
  const body = data.json();

  if(!data.ok) {
    throw new Error(data.statusText);
  }

  return body;
}