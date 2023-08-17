const createErrorComponent = (text) => {
  const container = document.createElement('div');
  const pokemonError = document.createElement('img');
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  pokemonError.classList.add('pokemon-error');

  pokemonError.src = './assets/noPokemon.webp';
  errorMessage.innerText = text;

  container.append(pokemonError, errorMessage);

  return container;
};

export default createErrorComponent;
