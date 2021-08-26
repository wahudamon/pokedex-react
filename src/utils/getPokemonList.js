export const getAllPokemon = async () => {
  const data = await fetching('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10');
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