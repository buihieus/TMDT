//[get] /home
module.exports.index = (req,res) => {

    res.render('client/pages/home/index.pug',{
        pageTitle: "Trang chủ"// đặt tên title ở web
    });
}