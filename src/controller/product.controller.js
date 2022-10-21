const ProductService = require("../service/product.service.js");

const productController = {
  countProduct: async (req, res, next) => {
    console.log("ok");
    const productService = new ProductService();
    try {
      const count = await productService.countProduct();
      res.json({ count });
    } catch (error) {
      console.log(error);
    } finally {
    }
  },
};
module.exports = productController;
