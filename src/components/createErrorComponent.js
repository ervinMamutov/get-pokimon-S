const createErrorComponent = () => {
  const container = document.createElement('div');
  const pokemonError = document.createElement('img');
  pokemonError.classList.add('pokemon-error');

  pokemonError.src = './assets/noPokemon.webp';

  container.append(pokemonError);

  return container;
};

export default createErrorComponent;
