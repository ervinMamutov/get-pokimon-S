const pokemonDataApi = async (id = 4) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to get photos with status : ${res.status}`);
    }
    const pokemon = await res.json();
    return pokemon;
  } catch (err) {
    console.error(err);
  }
};

export default pokemonDataApi;
