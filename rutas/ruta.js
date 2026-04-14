import express from "express";
import { getPorras } from "../controladores/controladores.js";

const routerPorras = express.Router()

routerPorras.get("/api/porras", getPorras)

export default routerPorras