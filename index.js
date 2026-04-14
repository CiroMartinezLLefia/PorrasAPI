import express from "express"
import dotenv from "dotenv"

import routerPorras from "./rutas/ruta.js"
import cors from "cors"

const app = express()   
app.use(cors())

dotenv.config()

app.get("/", (req, res) => {
    console.log("PETITION")
})

app.get("/api/porras", routerPorras)

app.listen(3000, () => {
    console.log("TESTING RUNNNING")
})