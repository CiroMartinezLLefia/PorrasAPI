import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import routerPorras from "./rutas/ruta.js"

const app = express()   

dotenv.config()
app.use(cors())

app.get("/", (req, res) => {
    console.log("PETITION")
})

app.get("/api/porras", routerPorras)

app.listen(3000, () => {
    console.log("TESTING RUNNNING")
})