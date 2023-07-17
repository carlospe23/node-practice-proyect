import express from "express";
import routerApi from "./routes/routerApi.js"
import {pool} from './db.js'


const app = express()

routerApi(app)

app.listen(3000, ()=>{
    console.log("Funcionando ando")
})
