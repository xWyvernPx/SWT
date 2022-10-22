const { checkPrimeAndGetPosition } = require("./isPrime");
/* Lấy cái hàm ở bên kia ra để test ở đây */

describe("Testing function checkPrimeAndGetPosition", () => {
  /* Describe sẽ đưa ra một cái scope để test và nó có tên, như là trong một "vùng" đó thì chỉ test một thứ thôi. Thì describe sẽ tạo ra một vùng mà gọi là test suit ( bộ test) nó bao gồm nhiều test function bên trong */
  test("Test function checkPrimeAndGetPosition with valid param", () => {
    /* Test function thì cũng định nghĩa một "vùng" được đặt tên và chưa các test case 

  /*
    Nếu như mà testcase bên trong pass hết thì cái test function mới passed(XANH) còn chỉ cần có 1 test case failed thì nguyên cái test function failed (ĐỎ)
   */

    /* Đây là cách khai báo một test case trong Jest
    Với expect() sẽ nhận một tham số là actual value (giá trị thực tế của hàm muốn test trả về) và các function để xác định expected value (giá trị mong muốn nó sẽ trả về) : toBe() cho các Primative Type , toEqual() cho các kiểu Reference Type ngoài ra còn các function khác sẽ xác định domain của expected value thay vì muốn nó bằng một giá trị co dinh  toBeGreaterThan(),toBeLessThan(), toMatch()
    có nhiều sự lựa chọn
    */

    /*  Ở đây hàm cần test trả về một Object là Reference Type nên là dùng toEqual */
    expect(checkPrimeAndGetPosition(2)).toEqual({
      isPrime: true,
      position: 1,
    });

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
  Lưu ý từ Jest :  cái hàm cần Test Error cần được bọc lại bằng một function thì mới bắt được lỗi
  WHY ? 
  */
  test("Test function checkPrimeAndGetPosition with invalid param", () => {
    expect(function () {
      return checkPrimeAndGetPosition("adfg");
    }).toThrow(); // mong doi quang ra loi
    expect(function () {
      return checkPrimeAndGetPosition(true);
    }).toThrow(); // mong doi quang ra loi
  });
});
