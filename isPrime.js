function isPrime(number) {
  if (!Number.isInteger(number)) {
    throw Error("Argument must be an integer");
  }
  if (number < 1) {
    throw Error("Argument must be larger than 1");
  }
  const checkResult = {
    isPrime: false,
    position: -1,
  };
  for (let index = 2; index < Math.sqrt(number); index++) {
    if (number % index === 0) {
      checkResult.isPrime = true;
    }
  }
  return checkResult;
}
module.exports = { isPrime };
