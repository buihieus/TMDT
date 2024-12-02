const express = require("express");
//cai nay de sd env
require("dotenv").config();

//nhúng route giao diện
const routes = require("./routes/client/index.route");

const app = express();
const port = 3000;
// cấu hinhf pug vao dự án
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/blog", (req, res) => {
  res.send("<h1>Trang danh sách bài viết</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Trang liên hệ</h1>");
});

//route
routes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
