import { describe, expect, test } from "@jest/globals";
import rpnCalculator from "../src/tools/rpnCalculator";
describe("rpnCalculator", () => {
  test("should calculate 6 7 88 9 - + 0 - * correctly", () => {
    expect(
      rpnCalculator([], ["6", "7", "88", "9", "-", "+", "0", "-", "*"])
    ).toEqual([516]);
  });

  test("should calculate properly", () => {
    expect(rpnCalculator([], ["6", "7", "+"])).toEqual([13]);
  });
  test("should calculate '5 5 5 8 + + -' properly", () => {
    expect(rpnCalculator([], ["5", "5", "5", "8", "+", "+", "-"])).toEqual([
      -13,
    ]);
  });

  test("should calculate '5 9 1 - /' properly", () => {
    expect(rpnCalculator([], ["5", "9", "1", "-", "/"])).toEqual([0.625]);
  });
});
