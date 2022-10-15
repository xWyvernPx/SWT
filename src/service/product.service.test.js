const productService = require("./product.service");

describe("Testing Product Service", () => {
  test("Testing method checkIfProductAvailable with valid params and Product is exist", async () => {
    const data = await productService.checkProductStockIfAvailable(1);
    expect(data).toEqual(true);
  });
  test("Testing method checkIfProductAvailable with valid params and Product not exist", async () => {
    const data = await productService.checkProductStockIfAvailable(2);
    expect(data).toEqual(false);
  });

  test("Testing method checkIfProductAvailable with invalid params", () => {
    function checkWithInvalidParams() {
      productService.checkProductStockIfAvailable("ada");
    }
    expect(() => checkWithInvalidParams).toThrow();
  });
});
