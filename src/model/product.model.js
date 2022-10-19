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
