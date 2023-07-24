import { Router } from "express";
import {
  obtenerCategoriasDisponiblesController,
  obtenerEditorialesController,
  obtenerEstadoLibroController,
  obtenerLibrosController,
  obtenerLibrosDisponiblesController,
  obtenerPrestamosController,
  obtenerReservasController,
  obtenerTodosLosAutoresController,
} from "../controllers/getData.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerAutores", obtenerTodosLosAutoresController);
  router.get("/categoriasDisponibles", obtenerCategoriasDisponiblesController);
  router.get("/obtenerEditoriales", obtenerEditorialesController);
  router.get("/estadoLibros", obtenerEstadoLibroController);
  router.get("/obtenerLibros", obtenerLibrosController);
  router.get("/obtenerPrestamos", obtenerPrestamosController);
  router.get("/obtenerReservas", obtenerReservasController);
  router.get("/librosDisponibles", obtenerLibrosDisponiblesController);
  return router;
};

export { getInitRoute };
