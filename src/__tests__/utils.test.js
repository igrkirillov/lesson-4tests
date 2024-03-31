 import {validateByLuhnAlgorithm} from "../js/utils";

describe("validateByLuhnAlgorithm", () => {
  test.each([
    { number: "4532286210295683", expected: true },
    { number: "11", expected: false },
  ])("validateByLuhnAlgorithm($number)", ({ number, expected }) => {
     expect(validateByLuhnAlgorithm(number)).toBe(expected);
  });
});
