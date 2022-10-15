function isPrime(number) {
  if (!Number.isInteger(number)) {
    throw Error("Argument must be an integer"); //
  }
  let result = true;
  if (number < 1) {
    throw Error("Argument must be larger than 1");
  } else if (number == 1) return checkResult;

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) {
      result = false;
      return result;
    }
  }
  return result;
}

const findPosPrimeNum = (number) => {
  let count = 0;
  for (let index = 2; index <= number; index++) {
    if (isPrime(index)) ++count;
  }
  return count;
};
const checkPrimeAndGetPosition = (number) => {
  const checkResult = {
    isPrime: isPrime(number),
    position: isPrime(number) ? findPosPrimeNum(number) : -1,
  };
  return checkResult;
};

module.exports = { checkPrimeAndGetPosition };

// TEST FUNCTION isPrime

console.log(
  "Testing Function isPrime with argument number = " + 2,
  "\n| Expected = ",
  {
    isPrime: true,
    position: 1,
  },
  "\n| Actual = ",
  checkPrimeAndGetPosition(2)
);
