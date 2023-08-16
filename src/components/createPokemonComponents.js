const createPokemonComponents = (data) => {
  const container = document.createElement('div');
  container.classList.add('pokemon-container');

  const pokemonImg = document.createElement('img');
  pokemonImg.classList.add('pokemon-img');
  const title = document.createElement('h4');
  const description = document.createElement('p');
  description.classList.add('description');

  pokemonImg.src = data.sprites.other.home.front_default;
  title.innerText = data.species.name;
  description.innerText = data.moves[0].move.name;

  container.append(title, pokemonImg, description);

  return container;
};

export default createPokemonComponents;
