/**
 * @jest-environment jsdom
 */
import createErrorComponent from './createErrorComponent.js';

describe('create user components', () => {
  const pokemon = createErrorComponent();
  describe('check nodeName', () => {
    test('childrenCount -> 1', () => {
      expect(pokemon.childElementCount).toEqual(1);
    });
    test('nodeName -> DIV', () => {
      expect(pokemon.nodeName).toEqual('DIV');
    });
    test('pokemon.firstChild.nodeName -> H4', () => {
      expect(pokemon.firstChild.nodeName).toEqual('IMG');
    });
  });
  describe('content', () => {
    test('pokemon.firstChild.src -> ./assets/noPokemon.webp', () => {
      expect(pokemon.firstChild.src).toEqual(
        'http://localhost/assets/noPokemon.webp',
      );
    });
  });
});
