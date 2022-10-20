const productController = require("../controller/product.controller");
const MainRouter = (app) => {
  app.get("/product/count", productController.countProduct);
  app.get("/private", (req, res, next) => {
    //In reality : check auth if authed next() if not response 403 as below
    res.status(403).json({
      error: 403,
      message: "You are not authorized to access this resource",
    });
  });
};
module.exports = { MainRouter };
