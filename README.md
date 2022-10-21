[![Demo Jest Framework CI](https://github.com/xWyvernPx/swt/actions/workflows/project-ci.yml/badge.svg)](https://github.com/xWyvernPx/swt/actions/workflows/project-ci.yml)

# **This project is a demo for SWT presentation about Framework Jest**

## **1. How to start using project**

- ### **Project link: https://github.com/xWyvernPx/swt**

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
  git clone https://github.com/xWyvernPx/swt.git
  ```

  **3. Install dependencies**

  ```
  npm install
  ```

  or

  ```
  yarn install
  ```

  > That's oke right now, lest open project in VS Code and start to demo

## **2. Comparing in JavaScript**

- Data Type in JavaScript :
  - Primary Type :
    <span style="color:orange"><strong>number</strong></span>,
    <span style="color:orange"><strong>boolean</strong></span>,
    <span style="color:orange"><strong>string</strong></span> ,
    <span style="color:orange"><strong>null</strong></span> ,
    <span style="color:orange"><strong>undefined</strong></span> ,...
  - Reference Type :
    <span style="color:orange"><strong>Object</strong></span>,
    <span style="color:orange"><strong>Array</strong></span>,
    <span style="color:orange"><strong>Function</strong></span>.
- 2 Types of Comparison :

  - Loose equality : <span style="color:orange"><strong>==</strong></span>
  - Strict equality : <span style="color:orange"><strong>===</strong></span>

  ### a. Problem with loose equality <span style="color:orange">**==**</span>

  Loose equality will only check the **value** neither the **type** <br>
  Example :

  > using to `node comparing.js /* or */ npm run comparing`

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
Run this file test by

```
  jest isPrime.test.js
```

```js
const {
  checkPrimeAndGetPosition,
} = require("./isPrime"); /* Lấy cái hàm ở bên kia ra để test ở đây */
describe("Testing function checkPrimeAndGetPosition", () => {
  /* Describe sẽ đưa ra một cái scope để test và nó có tên, như là trong một "vùng" đó thì chỉ test một thứ thôi. Và ở trong cái callback function này là cái "vùng " đó */
  test("Test function checkPrimeAndGetPosition with valid param", () => {
    /* Test thì cũng định nghĩa một "vùng" được đặt tên và chưa các test case , mỗi Test giống như một method trong class bên Java ví dụ "testcheckPrimeWithValidParameters" , "testcheckPrimeWithInvalidParameters" */

    /* Đây là cách khai báo một test case trong Jest
    Với expect() sẽ nhận một tham số là actual value (giá trị thực tế của hàm muốn test trả về) và các method để xác định expected value (giá trị mong muốn nó sẽ trả về) : toBe() cho các Primative Type , toEqual() cho các kiểu Reference Type ngoài ra còn các method khác sẽ xác định domain của expected value thay vì muốn nó bằng một giá trị  toBeGreaterThan(),toBeLessThan(), toMatch() 
    có nhiều sự lựa chọn
    */
    /*  Ở đây hàm cần test trả về một Object là Reference Type nên là dùng toEqual */

    expect(checkPrimeAndGetPosition(2)).toEqual({ isPrime: true, position: 1 });
    // Có thể có nhiều test case đây
    expect(checkPrimeAndGetPosition(3)).toEqual({ isPrime: true, position: 2 });
    expect(checkPrimeAndGetPosition(4)).toEqual({
      isPrime: false,
      position: -1,
    });
    expect(checkPrimeAndGetPosition(5)).toEqual({ isPrime: true, position: 3 });
    expect(checkPrimeAndGetPosition(6)).toEqual({
      isPrime: false,
      position: -1,
    });
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

> If already install extension click on symbol🏃.

> If not install extension use cli `jest isPrime.test.js`

## **4. Data Driven Testing in Jest**

Test scripts with Data Driven Testing at <span style="color:orange">isPrimeDDT.test.js</span> <br>
Running this file test by
`jest isPrimeDDT.test.js`
or click on symbol 🏃 to test each test function/test suit

```js
const { checkPrimeAndGetPosition } = require("./isPrime");
/* vẫn lấy hàm hồi nãy đã xuất khẩu ra để test */
const data = [
  /* Khai báo bộ data để test bằng một mảng hai chiều như chơi bên Java gồm input vào vào expected value */
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
  test.each(data)(
    "Testing function checkPrimeAndFindPos with DDT type 1",
    (input, expected) => {
      expect(checkPrimeAndGetPosition(input)).toEqual(expected);
    }
  );

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
  `(
    "Testing function checkPrimeAndFindPos with DDT type 2)",
    ({ input, expected }) => {
      expect(checkPrimeAndGetPosition(input)).toEqual(expected);
    }
  );
});
```

> If already install extension click on symbol 🏃

> If not install extension use cli `jest isPrimeDDT.test.js`

## **5. Test services with connecting database(MSSQL)**

To connect to database in Nodejs there are many ORM library.
We choose **Sequelize** here because it is really famous and its syntax is quite similar to almost others ORM or ODM in Javascript

### **1. Defined a model**

    We will need to have a entity to mapping to database table

> File at : **src/model/product.model.js**

```js
const { Sequelize, DataTypes } = require("sequelize");
// ORM là những thư viện hỗ trợ mapping các bảng trong database với các đối tượng của ngôn ngữ lập trình, ngoài ra còn giúp chúng ta tự sinh code SQL và thực thi thông qua những methods và configs thay vì viết câu lệnh SQL thủ công và tự cập nhật dữ liệu dươi database khi có thay đổi ở object đã mapping với database(migration).

const sequelize = new Sequelize({
  host: "localhost",
  database: "swt",
  port: 1433,
  username: "sa",
  password: "WyvernP2506",
  dialect: "mssql",
}); // new mới một instance của thư viện để sử dụng, khai báo host , password , username,... để nó sẽ tự động kết nối khi nào sử dụng

const productModel = sequelize.define(
  /*định nghĩa một model trong javascript để thằng thư viện sẽ mapping với table dưới database để khi mà tự sinh SQL để thực thi */
  "product",
  {
    /* các thuộc tính tương ứng với với các fields ở dưới database */
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  },
  {
    tableName: "product", //Tên table tương ứng khi mapping
    timestamps: false, // có các fields createdAt modifiedAt không
  }
);
module.exports = productModel;
// xuất model này ra để sử dụng ở chỗ khác
```

### **2. Write a simple service**

After having defined a model Product, we will have a simple service with that product model

> Source : **src/service/product.service.js**

```js
const productModel = require("../model/product.model");
class ProductService {
  //function kiểm tra xem sản phẩm có còn  trong kho hay không
  async checkProductStockIfAvailable(product_id) {
    if (!Number.isInteger(product_id))
      // Tương tự ở demo checkPrime nếu truyền vào product_id không phải integer thì quăng Error ra
      throw Error("Product id must be Interger");

    const product = await productModel.findOne({ where: { id: product_id } });
    //kiếm sản phẩm dựa trên product id truyền vào
    if (product === null) return false;
    //nếu không có product thì product đã bị xóa => không còn trong kho
    return product.stock > 0;
    // nếu có product và stock > 0 nghĩa là còn => true còn không => false
  }
}

module.exports = new ProductService();
```

### 3. Let test that service

Now we start to testing above service. But first, there is a problem that we need to consider when testing a service which connect to database :

- Is the data used for testing same on different systems ?
  => No

Solution :

> Jest support us a concept One-Time setup with hooks **_beforeAll()_** and **_afterAll()_** <br> > **Idea** :
>
> - Open connection, create database, create table, insert sample data for testing => Init database before starting to test with **beforeAll()**
> - Drop database, close connection => Clear database after testing done with **afterAll()**

> Source : **src/service/product.service.test.js**
> Test this file by running :
> <br> > `jest src/service/product.service.test.js` > <br>
> or click on symbol 🏃

```js
const ProductService = require("./product.service");
const { Sequelize } = require("sequelize");
const productModel = require("../model/product.model");
jest.setTimeout(120000);
const productService = new ProductService();
const sequelize = new Sequelize({
  // ORM
  host: "localhost",
  port: 1433,
  dialect: "mssql",
  username: "sa",
  password: "WyvernP2506",
});

beforeAll(async () => {
  await sequelize
    .authenticate() // Open connection
    .then(async () => {
      // Nếu kết nối thành công
      await sequelize.query(`
      IF NOT EXISTS (
        SELECT [name]
        FROM sys.databases
        WHERE [name] = N'swt'
      )
      CREATE DATABASE swt`);
      await sequelize.query("USE swt");
      // Tạo database tên swt nếu chưa có , nếu có rồi thì thôi xài luôn
      await sequelize.query(`
      IF OBJECT_ID('[dbo].[product]', 'U') IS NOT NULL
      DROP TABLE [dbo].[product]
      CREATE TABLE [dbo].[product]
      (
         id int IDENTITY ,
          name VARCHAR(50),
          [desc] VARCHAR(250),
          stock int ,
          [status] bit ,
          price float,
          CONSTRAINT PK_Product PRIMARY KEY (id)
      );`); // Tạo bảng nếu chưa có
    });

  await Promise.all([
    // INSERT dữ liệu mẫu để testing vào database
    productModel.create({
      name: "Product 1",
      desc: "Demo Product 1",
      stock: 100,
      status: 1,
      price: 200000,
    }),
    productModel.create({
      name: "Product 2",
      desc: "Demo Product 2",
      stock: 0,
      status: 1,
      price: 200000,
    }),
  ]);
});

afterAll(async () => {
  await sequelize.query("use master");
  await sequelize.query("DROP DATABASE swt");
  // Clear database
  sequelize.close();
  // Close connection
});

describe("Testing Product Service", () => {
  test("Testing method checkIfProductAvailable with valid params and Product is exist", async () => {
    expect(await productService.checkProductStockIfAvailable(1)).toBe(true);
    expect(await productService.checkProductStockIfAvailable(2)).toBe(false);
  });
  test("Testing method checkIfProductAvailable with valid params and Product not exist", async () => {
    const data = await productService.checkProductStockIfAvailable(3);
    expect(data).toEqual(false);
  });
});
```

## **6. Test RestAPIs**

> Everyone can visit this site to get detail tutorial of testing RestAPI with Jest and supertest alongs with demos

> **[Testing RestAPI with Jest and supertest](https://dev.to/franciscomendes10866/testing-express-api-with-jest-and-supertest-3gf)**

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
        node-version: [16.x, 18.x]

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
