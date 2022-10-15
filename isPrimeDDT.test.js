const { checkPrimeAndGetPosition } = require("./isPrime");
const data = [
  [2, { isPrime: true, position: 1 }],
  [3, { isPrime: true, position: 2 }],
  [4, { isPrime: false, position: -1 }],
  [5, { isPrime: true, position: 3 }],
  [6, { isPrime: false, position: -1 }],
  [7, { isPrime: true, position: 4 }],
];

describe("Testing function checkPrimeAndFindPos with Data Driven Data", () => {
  test.each(data)("Testing with DDT type 1", (input, expected) => {
    expect(checkPrimeAndGetPosition(input)).toEqual(expected);
  });
  test.each`
    input | expected
    ${2}  | ${{ isPrime: true, position: 1 }}
    ${3}  | ${{ isPrime: true, position: 2 }}
    ${4}  | ${{ isPrime: false, position: -1 }}
    ${5}  | ${{ isPrime: true, position: 3 }}
    ${6}  | ${{ isPrime: false, position: -1 }}
    ${7}  | ${{ isPrime: true, position: 4 }}
  `("Testing with DDT type 2)", ({ input, expected }) => {
    expect(checkPrimeAndGetPosition(input)).toEqual(expected);
  });
});
