const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/products_test");

// const database = require("./config/database.js");
//cai nay de sd env
require("dotenv").config();

const systemConfig = require("./config/system");

//nhúng route giao diện
const route = require("./routes/client/index.route");
const routesAdmin = require("./routes/admin/index.route");

const app = express();
const port = process.env.PORT;
// cấu hinhf pug vao dự án
app.set("views", "./views");
app.set("view engine", "pug");

// app locals variables biến toàn cục

app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.use(express.static("public"));

// Cấu hình thư mục tĩnh
app.use('/css', express.static('public/css'));
app.use(express.static(path.join(__dirname, 'public')));

// Database
// database.connect();

app.get("/blog", (req, res) => {
  res.send("<h1>Trang danh sách bài viết</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Trang liên hệ</h1>");
});

//route
routesAdmin(app);
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const Product = mongoose.model('Products', {
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  featured: String,
  position: Number
});

// Đoạn mã truy vấn để lấy tất cả sản phẩm và in ra terminal
app.get("/products", (req, res) => {
  Product.find()
    .then(products => {
      console.log(products);  // In dữ liệu lên terminal
      res.render("products", {
        products: products,  // Truyền sản phẩm vào view
      });
    })
    .catch(err => {
      console.log("Error retrieving products:", err);
    });
});
