import dom from "../data/dom.js";
import pokemonDataHandler from "../handler/pokemonDataHandler.js";

const pokemonIdKeyboardListener = () => {
  const input = dom.inputId;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      pokemonDataHandler(e);
    }
  });
};

export default pokemonIdKeyboardListener;
