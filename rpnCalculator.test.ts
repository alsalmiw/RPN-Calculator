import {describe, expect, test} from '@jest/globals';
import rpnCalculator from './src/tools/rpnCalculator';
describe("rpnCalculator", () => {
  test("should calculate 6 7 88 9 - + 0 - * correctly", () => {
    expect(
      rpnCalculator([], ["6", "7", "88", "9", "-", "+", "0", "-", "*"])
    ).toEqual([516])
  });

  test("should calculate properly", () => {
    expect(
      rpnCalculator([], ["6", "7", "+"])
    ).toEqual([13]);
  });
});
