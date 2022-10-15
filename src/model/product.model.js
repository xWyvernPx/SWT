const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  // database: "SWT",
  port: 1433,
  username: "sa",
  password: "WyvernP2506",
  dialect: "mssql",
});
const productModel = sequelize.define(
  "product",
  {
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
    tableName: "product",
    timestamps: false,
  }
);
module.exports = productModel;
