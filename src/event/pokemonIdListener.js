import dom from "../data/dom.js";
import pokemonDataHandler from "../handler/pokemonDataHandler.js";

const pokemonIdListener = () => {
  dom.btnSearch.addEventListener("click", () => {
    pokemonDataHandler();
  });
};

export default pokemonIdListener;
