const dashboardRoutes = require("./dashboard.route");

const systemConfig = require("../../config/system");

module.exports = (app) => {
    const PATH_ADMIN = dashboardRoutes.prefixAdmin; 

    app.use("/admin/dashboard",dashboardRoutes);
}