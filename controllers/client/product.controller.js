module.exports.products = (req,res) =>{
    res.render('client/pages/products/index',{
        pageTitle: "Trang danh sách sản phẩm"// đặt tên title ở web
    })
}