import { Router } from "express";
import {
  obtenerCategoriasDisponiblesController,
  obtenerTodosLosAutoresController,
} from "../controllers/getData.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerAutores", obtenerTodosLosAutoresController);
  router.get("/categoriasDisponibles", obtenerCategoriasDisponiblesController);
  return router;
};

export { getInitRoute };
