import { Router } from "express";
import {
  obtenerCategoriasDisponiblesController,
  obtenerEditorialesController,
  obtenerEstadoLibroController,
  obtenerTodosLosAutoresController,
} from "../controllers/getData.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerAutores", obtenerTodosLosAutoresController);
  router.get("/categoriasDisponibles", obtenerCategoriasDisponiblesController);
  router.get("/obtenerEditoriales", obtenerEditorialesController);
  router.get("/estadoLibros", obtenerEstadoLibroController);
  return router;
};

export { getInitRoute };
