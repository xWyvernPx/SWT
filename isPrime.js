function isPrime(number) {
  if (!Number.isInteger(number)) {
    throw Error(
      "Argument must be an integer"
    ); /* Trường hợp cho vào một chuỗi, một số thực không phải số nguyên */
  }
  let result = true; // flag
  if (number < 1) {
    throw Error(
      "Argument must be larger than 1"
    ); /* Theo định nghĩa thì số nguyên tố phải là số nguyên dương lớn hơn 1 */
  } else if (number == 1) return false;
  /* 1 không phải số nguyên tố dựa vào định nghĩa trên */
  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) {
      result = false;
      return result;
    }
  } //Giải thuật kiểm tra một số có phải số nguyên tố hay không
  return result;
}

const findPosPrimeNum = (number) => {
  /*
  Hàm này để tìm vị trí của một số nguyên tố */
  let count = 0;
  for (let index = 2; index <= number; index++) {
    if (isPrime(index)) ++count;
  } // 
  return count;
};
const checkPrimeAndGetPosition = (number) => {
  /* Hàm này dùng để TEST , thực hiện kiểm tra một số có phải số nguyên tố không , nếu phải thì tìm vị trí  */
  const checkResult = {
    isPrime: isPrime(number),
    position: isPrime(number) ? findPosPrimeNum(number) : -1,
  };
  return checkResult; /* Trả về một Object gôm kết quả kiểm ra nguyên tố và nếu là số nguyên tố thì trả về vị trí, còn không phải số nguyên tố thì vị trí là -1 */
};

module.exports = { checkPrimeAndGetPosition };
// De xuat cai ham ra de cho khac lay su dung duoc
// TEST FUNCTION isPrime

console.log(
  "Testing Function checkPrimeAndGetPosition with argument number = " + 2,
  "\n| Expected = ",
  {
    isPrime: true,
    position: 1,
  },
  "\n| Actual = ", checkPrimeAndGetPosition(2)
);
console.log(
  "Testing Function isPrime with argument number = " + 3,
  "\n| Expected = ",
  {
    isPrime: true,
    position: 2,
  },
  "\n| Actual = ", checkPrimeAndGetPosition(3)
);
console.log(
  "Testing Function isPrime with argument number = " + 4,
  "\n| Expected = ",
  {
    isPrime: false,
    position: -1,
  },
  "\n| Actual = ", checkPrimeAndGetPosition(4)
);
