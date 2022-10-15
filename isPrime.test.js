const { isPrime } = require("./isPrime");
describe("first", () => {
  test("is Prime with normal argument", () => {
    expect(isPrime(2)).toEqual({
      isPrime: false,
      position: -1,
    });
  });
});
