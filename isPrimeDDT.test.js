const { checkPrimeAndGetPosition } = require("./isPrime");
/* vẫn lấy hàm hồi nãy đã xuất khẩu ra để test */
const data = [
  /* Khai báo bộ data để test bằng một mảng hai chiều như chơi bên Java gồm input vào và expected value */
  [2, { isPrime: true, position: 1 }],
  [3, { isPrime: true, position: 2 }],
  [4, { isPrime: false, position: -1 }],
  [5, { isPrime: true, position: 3 }],
  [6, { isPrime: false, position: -1 }],
  [7, { isPrime: true, position: 4 }],
];

describe("Testing function checkPrimeAndFindPos with Data Driven Testing", () => {
  /* khai báo Test với bộ data (each) và từng cặp input , expected value sẽ được nhét vào cho ta xài 
  snippet :gõ teste -> tab
  */

  test.each(data)(
    "Testing function checkPrimeAndFindPos with DDT type 1", // cú pháp chơi DDT với jest
    (input, expected) => {
      //callback function với param là mỗi bộ dữ liệu (input, expected) trong bộ data truyền vào ở trên
      expect(checkPrimeAndGetPosition(input)).toEqual(expected);
    }
  );

  /*     Cách này lầ`y hơn không cần khai báo bộ data bằng mảng hai   chiều mà chơi viết theo format FrameWork quy định như vầy luôn
     Vẫn như trên nó sẽ nhét từng bộ input và expected vào cho ta xài 
     Không cần nhớ cú pháp, sử dụng đồ chơi đã cài ( Jest Snippet ) 
     gõ testet  -> tab 
     */

  /* test.each`
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
  ); */
});
