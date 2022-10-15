const { checkPrimeAndGetPosition } = require("./isPrime");
describe("Testing", () => {
  test("isPrime with normal argument", () => {
    expect(checkPrimeAndGetPosition(2)).toEqual({
      isPrime: false,
      position: -1,
    });
  });
  test("isPrime invalid params", () => {
    expect(() => checkPrimeAndGetPosition("aqqq")).toThrow();
  });
});
