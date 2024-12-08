//[get] /admins/products
const products = require('../../models/product.model');
module.exports.index = async (req,res) => {

    const product = await products.find({
        deleted: false
    });

    console.log(product);
    res.render('admin/pages/products/index.pug',{
        pageTitle: "trang sản phẩm",// đặt tên title ở web
        products: products
    });
}