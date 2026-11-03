import { describe, it, expect } from 'vitest';
import {
  capitalizar,
  capitalizarPalabras,
  contarPalabras,
  invertir,
  esPalindromo,
  truncar,
  crearCensurador,
  unirConY,
} from '../src/texto.js';

describe('capitalizar', () => {
  it('capitaliza inicial', () => expect(capitalizar('ñandú')).toBe('Ñandú'));
  it('admite vacío', () => expect(capitalizar('')).toBe(''));
});
describe('capitalizarPalabras', () => {
  it('capitaliza cada palabra', () =>
    expect(capitalizarPalabras('el SEÑOR de los anillos')).toBe('El Señor De Los Anillos'));
  it('admite vacío', () => expect(capitalizarPalabras('')).toBe(''));
});
describe('contarPalabras', () => {
  it('ignora espacios repetidos', () => expect(contarPalabras('  hola   mundo ')).toBe(2));
  it('devuelve cero para espacios', () => expect(contarPalabras('   ')).toBe(0));
});
describe('invertir', () => {
  it('invierte texto', () => expect(invertir('hola')).toBe('aloh'));
  it('preserva emoji', () => expect(invertir('ab😀')).toBe('😀ba'));
});
describe('esPalindromo', () => {
  it('ignora espacios y mayúsculas', () => expect(esPalindromo('Anita lava la tina')).toBe(true));
  it('rechaza espacios', () => expect(esPalindromo('   ')).toBe(false));
});
describe('truncar', () => {
  it('conserva texto que cabe justo', () => expect(truncar('Hola', 4)).toBe('Hola'));
  it('quita espacio junto a la marca', () =>
    expect(truncar('Desarrollo web avanzado', 12)).toBe('Desarrollo…'));
  it('rechaza longitud inválida', () => expect(() => truncar('hola', 1)).toThrow(RangeError));
});
describe('crearCensurador', () => {
  it('censura sin distinguir capitalización', () =>
    expect(crearCensurador('feo')('Qué FEO es')).toBe('Qué *** es'));
  it('mantiene aislados los closures', () => {
    const gato = crearCensurador('gato');
    const perro = crearCensurador('perro');
    expect(gato('gato perro')).toBe('**** perro');
    expect(perro('gato perro')).toBe('gato *****');
  });
});
describe('unirConY', () => {
  it('une tres elementos', () => expect(unirConY('Ana', 'Luis', 'Eva')).toBe('Ana, Luis y Eva'));
  it('devuelve vacío sin elementos', () => expect(unirConY()).toBe(''));
});
