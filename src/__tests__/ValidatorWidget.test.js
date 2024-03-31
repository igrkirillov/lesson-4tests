import ValidatorWidget from "../js/ValidatorWidget";

describe("checking validity", () => {
  test.each([
    { numberStr: "4532286210295683", expected: true },
    { numberStr: "5555555555555555", expected: false },
  ])("ValidatorWidget", ({ numberStr, expected }) => {
    document.body.innerHTML = "<div class=\"container\"></div>"
    // const widget = new ValidatorWidget()
    // expect(determineCardType(numberStr)).toBe(expected);
  });
});
