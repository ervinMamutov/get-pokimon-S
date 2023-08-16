import dom from '../data/dom.js';
import pokemonDataApi from '../../apis/pokemonDataApi.js';
import createPokemonComponents from '../components/createPokemonComponents.js';
import createErrorComponent from '../components/createErrorComponent.js';
import pokemonIdControl from '../data/data.js';

const pokemonDataHandler = async () => {
  const inputId = dom.inputId.value;
  if (pokemonIdControl.pokemonId === inputId || inputId === '') {
    return;
  }
  const data = await pokemonDataApi(inputId);
  if (!data) {
    const pokemonError = createErrorComponent();
    dom.root.innerText = '';
    dom.inputId.value = '';
    dom.root.append(pokemonError);
    return;
  }

  const pokemon = createPokemonComponents(data);
  dom.root.innerText = '';
  dom.root.append(pokemon);

  dom.inputId.value = '';
  pokemonIdControl.pokemonId = inputId;
  // console.log(dom);
};

export default pokemonDataHandler;
