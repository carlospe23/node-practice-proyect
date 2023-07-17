import express from "express";
import employeesRoutes from "./employeesRoutes.js"

function routerApi(app){
    const router = express.Router()
    app.use('/api/v1', router);
    router.use('/employees', employeesRoutes);
};

export default routerApi