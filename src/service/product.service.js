const productModel = require("../model/product.model");
class ProductService {
  //function kiểm tra xem sản phẩm có còn  trong kho hay không
  async checkProductStockIfAvailable(product_id) {
    const product = await productModel.findOne({ where: { id: product_id } });
    //kiếm sản phẩm dựa trên product id truyền vào
    if (product === null) return false;
    //nếu không có product thì product đã bị xóa => không còn trong kho
    return product.stock > 0;
    // nếu có product và stock > 0 nghĩa là còn => true còn không => false
  }
  async countProduct() {
    return await productModel.count();
  }
}

module.exports = ProductService;
