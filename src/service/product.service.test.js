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
    const data = await productService.checkProductStockIfAvailable(100);
    expect(data).toEqual(false);
  });
});
