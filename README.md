[![SWT Demo CI](https://github.com/xWyvernPx/SWT/actions/workflows/node.js.yml/badge.svg)](https://github.com/xWyvernPx/SWT/actions/workflows/node.js.yml)

# **This project is a demo for SWT presentation about Framework Jest**

## **1. How to start using project**

- ### **Project link: https://github.com/xWyvernPx/SWT**
  > Make sure that you have installed Node on your system <br>
  > You can install it here: [Node](https://nodejs.org/en/download/)

**1. Install jest as global**

```
npm install -g jest
```

or

```
yarn global add jest
```

**2. Clone project**

```git
git clone https://github.com/xWyvernPx/SWT.git
```

## **2. Comparing in JavaScript**

- Data Type in JavaScript :
  - Primary type :
    <span style="color:orange">number</span>,
    <span style="color:orange">String</span> ,
    <span style="color:orange">null</span> ,
    <span style="color:orange">undefined</span> ,
    <span style="color:orange">boolean</span>,...
  - Reference Type :
    <span style="color:orange">Object</span>,
    <span style="color:orange">Array</span>.
- 2 Types of Comparison :

  - Loose equality : <span style="color:orange">==</span>
  - Strict equality : <span style="color:orange">===</span>

  ### a. Problem with loose equality <span style="color:orange">==</span>

  Loose equality will only check the **value** neither the **type** <br>
  Example :

  > using to `npm run comparing`

  ```js
  /* Case 1 */
  const expected = 3;
  const actual = "3";
  console.log(
    `Expected value: ${expected}\nActual value: ${actual}\nCompare value: ${
      expected == actual
    }`
  );
  /* Result log : 
  Expected value: 3
  Actual value: 3
  Compare value: true
  */
  ```

  ```js
  /* Case 2 */
  const expected = true;
  const actual = "1";

  log(
    `Expected value: ${expected}\nActual value: ${actual}\nCompare value: ${
      expected == actual
    }`
  );
  /* Result log : 
  Expected value: true
  Actual value: 1
  Compare value: true
  */
  ```

  ### b. Problem with loose equality <span style="color:orange">**===**</span>

  > With **Reference Type** this comparison will only compare the address

  ```js
  /* Case 1 */

  const studentA = {
    name: "A",
    age: 20,
  };
  const studentA2 = {
    name: "A",
    age: 20,
  };

  log(
    "Expected value: ",
    studentA,
    "\nActual value: ",
    studentA2,
    `\nCompare value: ${studentA === studentA2}`
  );

  /* Result log : 
  Expected value:  { name: 'A', age: 20 } 
  Actual value:  { name: 'A', age: 20 } 
  Compare value: false
  */
  ```

  ```js
  /* Case 2 */

  const expected = [1, 2, 3];
  const actual = [1, 2, 3];

  log(
    `Expected value: ${expected}\nActual value: ${actual}\nCompare value: ${
      expected === actual
    }`
  );

  /* Result log : 
  Expected value: 1,2,3
  Actual value: 1,2,3
  Compare value: false
  */
  ```

## **3. Start to testing with Jest**

To started to using Jest we will have a simple function in <span style="color:orange">isPrime.js</span> :

```js
function isPrime(number) {
  if (!Number.isInteger(number)) {
    throw Error(
      "Argument must be an integer"
    ); /* Trường hợp người dùng nhập vào một chuỗi, một số thực không phải số nguyên */
  }
  let result = true;
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
  }
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

module.exports = { checkPrimeAndGetPosition }; // xuất ra để có thể sử dụng chỗ khác, sử dụng trong hàm test
```
