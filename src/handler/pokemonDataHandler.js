import dom from '../data/dom.js';
import pokemonDataApi from '../../apis/pokemonDataApi.js';
import createPokemonComponents from '../components/createPokemonComponents.js';
import createErrorComponent from '../components/createErrorComponent.js';
import pokemonIdControl from '../data/data.js';

const pokemonDataHandler = async () => {
  const inputId = dom.inputId.value;

  const validateIds = [];

  const ids = inputId.split(',').map((id) => Number(id.trim()));

  for (const id of ids) {
    const idCheckNumber = Number(id);
    if (
      !Number.isNaN(idCheckNumber) &&
      idCheckNumber > 0 &&
      idCheckNumber < 1281
    ) {
      validateIds.push(idCheckNumber);
    } else {
      const text = 'Pokémon ID out of interval. Please Repeat.';
      const pokemonError = createErrorComponent(text);
      dom.root.innerText = '';
      dom.inputId.value = '';
      dom.root.append(pokemonError);
      return;
    }
  }

  if (validateIds.length === 0) {
    const text = 'Enter the input Pokémon ID. Empty is not enough.';
    const pokemonError = createErrorComponent(text);
    dom.root.innerText = '';
    dom.inputId.value = '';
    dom.root.append(pokemonError);
    return;
  }

  const pokemonData = validateIds.map((id) => pokemonDataApi(id));

  const dates = await Promise.all(pokemonData);
  if (!dates) {
    const text = 'I am sorry, but the Pokémon are so busy.';

    const pokemonError = createErrorComponent(text);
    dom.root.innerText = '';
    dom.inputId.value = '';
    dom.root.append(pokemonError);
    return;
  }

  dom.root.innerText = '';

  dates.forEach((data) => {
    const pokemon = createPokemonComponents(data);
    dom.root.append(pokemon);
  });

  dom.inputId.value = '';
  pokemonIdControl.pokemonId = inputId;
};

export default pokemonDataHandler;
