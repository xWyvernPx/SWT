const productModel = require("../model/product.model");
class ProductService {
  async checkProductStockIfAvailable(product_id) {
    if (!Number.isInteger(product_id))
      throw Error("Product id must be Interger");
    const product = await productModel.findOne({ where: { id: product_id } });
    console.log(product);
    if (product === null) return false;
    return product.stock > 0;
  }
}

module.exports = new ProductService();
