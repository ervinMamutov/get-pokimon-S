/**
 * @jest-environment jsdom
 */
import createPokemonComponents from './createPokemonComponents.js';

const data = {
  species: {
    name: 'test',
  },
  sprites: {
    other: {
      home: {
        front_default: 'https://test.url',
      },
    },
  },
  moves: [
    {
      move: {
        name: 'test-name',
      },
    },
  ],
};

describe('create user components', () => {
  const pokemon = createPokemonComponents(data);
  describe('check nodeName', () => {
    test('childrenCount -> 3', () => {
      expect(pokemon.childElementCount).toEqual(3);
    });
    test('nodeName -> DIV', () => {
      expect(pokemon.nodeName).toEqual('DIV');
    });
    test('pokemon.children[0].nodeName -> H4', () => {
      expect(pokemon.children[0].nodeName).toEqual('H4');
    });
    test('pokemon.children[1].nodeName -> IMG', () => {
      expect(pokemon.children[1].nodeName).toEqual('IMG');
    });
    test('pokemon.children[2].nodeName -> P', () => {
      expect(pokemon.children[2].nodeName).toEqual('P');
    });
  });
  describe('content', () => {
    test('pokemon.children[0].innerText -> "test"', () => {
      expect(pokemon.children[0].innerText).toEqual('test');
    });
    test('pokemon.children[1].src -> "https://test.url/"', () => {
      expect(pokemon.children[1].src).toEqual('https://test.url/');
    });
    test('pokemon.children[2].innerText -> "test-name"', () => {
      expect(pokemon.children[2].innerText).toEqual('test-name');
    });
  });
});
