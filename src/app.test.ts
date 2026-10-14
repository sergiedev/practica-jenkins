import { describe, test, expect } from 'vitest';
import { sumar, restar } from './app';

describe('Pruebas de Funciones Matemáticas con Vitest', () => {
  test('Debe sumar correctamente dos números', () => {
    expect(sumar(5, 3)).toBe(8);
    expect(sumar(-1, 1)).toBe(0);
  });

  test('Debe restar correctamente dos números', () => {
    expect(restar(10, 4)).toBe(6);
    expect(restar(5, 5)).toBe(0);
  });
});