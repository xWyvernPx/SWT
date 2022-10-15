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
    ); /* Trường hợp cho vào một chuỗi, một số thực không phải số nguyên */
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
Let's test itttt. <br>
There is a file <span style="color:orange">isPrime.test.js</span>

```js 
  const { checkPrimeAndGetPosition } = require("./isPrime"); /* Lấy cái hàm ở bên kia ra để test ở đây */
describe("Testing function checkPrimeAndGetPosition", () => { /* Describe sẽ đưa ra một cái scope để test và nó có tên, như là trong một "vùng" đó thì chỉ test một thứ thôi. Và ở trong cái callback function này là cái "vùng " đó */
  test("Test function checkPrimeAndGetPosition with valid param", () => { /* Test thì cũng định nghĩa một "vùng" được đặt tên và chưa các test case , mỗi Test giống như một method trong class bên Java ví dụ "testcheckPrimeWithValidParameters" , "testcheckPrimeWithInvalidParameters" */

    /* Đây là cách khai báo một test case trong Jest
    Với expect() sẽ nhận một tham số là actual value (giá trị thực tế của hàm muốn test trả về) và các method để xác định expected value (giá trị mong muốn nó sẽ trả về) : toBe() cho các Primative Type , toEqual() cho các kiểu Reference Type ngoài ra còn các method khác sẽ xác định domain của expected value thay vì muốn nó bằng một giá trị  toBeGreaterThan(),toBeLessThan(), toMatch() 
    có nhiều sự lựa chọn
    */
    /*  Ở đây hàm cần test trả về một Object là Reference Type nên là dùng toEqual */

    expect(checkPrimeAndGetPosition(2)).toEqual({ isPrime: true, position: 1 });
    // Có thể có nhiều test case đây
    expect(checkPrimeAndGetPosition(3)).toEqual({ isPrime: true, position: 2 });
    expect(checkPrimeAndGetPosition(4)).toEqual({ isPrime: false, position: -1 });
    expect(checkPrimeAndGetPosition(5)).toEqual({ isPrime: true, position: 3 });
    expect(checkPrimeAndGetPosition(6)).toEqual({ isPrime: false, position: -1 });
    expect(checkPrimeAndGetPosition(7)).toEqual({ isPrime: true, position: 4 });
  });

  /* Trường hợp tham số truyền vào không phải kiểu Integer thì nó sẽ quăng ra Error
  sử dụng toThrow() để bắt Error 
  Lưu ý từ Jest :  cái hàm cần Test cần được bọc lại bằng một function thì mới bắt được lỗi
  */
  test("Test function checkPrimeAndGetPosition with valid param", () => {
    expect(() => checkPrimeAndGetPosition("asdfgh")).toThrow();
  });
});

```

> If already install extension click on symbol  
> If not install extension use cli ```jest isPrime.test.js```

## **4. Data Driven Testing in Jest** 
Test scripts in at  <span style="color:orange">isPrimeDDT.test.js</span>
```js 
  const { checkPrimeAndGetPosition } = require("./isPrime");
/* vẫn lấy hàm hồi nãy đã xuất khẩu ra để test */
const data = [ /* Khai báo bộ data để test bằng một mảng hai chiều như chơi bên Java gồm input vào vào expected value */
  [2, { isPrime: true, position: 1 }],
  [3, { isPrime: true, position: 2 }],
  [4, { isPrime: false, position: -1 }],
  [5, { isPrime: true, position: 3 }],
  [6, { isPrime: false, position: -1 }],
  [7, { isPrime: true, position: 3 }],
];

describe("Testing function checkPrimeAndFindPos with Data Driven Testing", () => {
  /* khai báo Test với bộ data (each) và từng cặp input , expected value sẽ được nhét vào cho ta xài 
    Chơi đồ chơi đã cài không cần nhớ cú pháp  : Jest Snippet
  snippet : gõ teste -> tab

  */
  test.each(data)("Testing function checkPrimeAndFindPos with DDT type 1",
    (input, expected) => {
      expect(checkPrimeAndGetPosition(input)).toEqual(expected);
    });

  /*     Cách này lầ`y hơn không cần khai báo bộ data bằng mảng hai chiều mà   chơi viết theo format FW quy định như vầy luôn
     Vẫn như trên nó sẽ nhét từng bộ input và expected vào cho ta xài 
     Không cần nhớ cú pháp, sử dụng đồ chơi đã cài ( Jest Snippet ) 
     gõ testet  -> tab 
     */
  test.each`
    input | expected
    ${2}  | ${{ isPrime: true, position: 1 }}
    ${3}  | ${{ isPrime: true, position: 2 }}
    ${4}  | ${{ isPrime: false, position: -1 }}
    ${5}  | ${{ isPrime: true, position: 3 }}
    ${6}  | ${{ isPrime: false, position: -1 }}
    ${7}  | ${{ isPrime: true, position: 4 }}
  `("Testing function checkPrimeAndFindPos with DDT type 2)", ({ input, expected }) => {
    expect(checkPrimeAndGetPosition(input)).toEqual(expected);
  });
});

```

> If already install extension click on symbol  
> If not install extension use cli ```jest isPrimeDDT.test.js```

## **5. Test services with async/await**
## **5. Test RestAPIs**

## **7. CI project with GitAction**
> <span style="color:orange">.github/workflows/project-ci.yml</span>

```yml

name: demo Jest Framework CI

on:
    # Mỗi khi code push lên nhánh master là thực hiện CI
  push:
    branches: ["master"] 
    #Mỗi khi có pull_request  vào nhánh master là thực hiện CI
  pull_request:
    branches: ["master"] 

jobs:
  build:
  # xin server ubuntu bản mới nhất để sử dụng
    runs-on: ubuntu-latest 

    strategy:
      matrix: 
      # đưa ra danh sách môi trường để thực hiện các jobs trong CI mỗi phiên bản môi trường ( Node) sẽ là một nhánh thực hiện các jobs và các nhánh này thực hiện song song nhau
        node-version: [16.x,18.x] 

    steps:
    #Cài môi trường Node cho các nhánh khác nhau
      - uses: actions/checkout@v3 
      - name: Use Node.js ${{ matrix.node-version }} 
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }} 
          cache: "npm"
    # Tải các dependencies ( hay packages , library ) cho cái dự án bằng câu lệnh CLI npm install
      - name: Install dependencies
        run: npm install
    # Bắt đầu Testing toàn bộ dự án bằng CLI  : npm  test
    # Bản chất câu lệnh trên sẽ gọi  câu lệnh  jest -> jest sẽ đi kiếm toàn bộ file nào có đuôi *.test.js hoặc *.spec.js để thực hiện tất cả các test trong các file đó , nếu Passed hết => XANH ; Chỉ cần 1 test case fail -> test trên file đó Fail =>  ĐỎ
      - name: Run test
        run: npm test

```

