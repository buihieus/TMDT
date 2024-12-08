//[get] /admins/dashboard
module.exports.dashboard = (req,res) => {
    
    res.render('admin/pages/dashboard/index.pug',{
        pageTitle: "trang tổng quan"// đặt tên title ở web
    });
}