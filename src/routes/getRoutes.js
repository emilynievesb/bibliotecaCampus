import { Router } from "express";
import {
  obtenerCategoriasDisponiblesController,
  obtenerEditorialesController,
  obtenerEstadoLibroController,
  obtenerLibrosController,
  obtenerLibrosDisponiblesController,
  obtenerPrestadosController,
  obtenerPrestamosController,
  obtenerReservasController,
  obtenerTodosLosAutoresController,
  obtenerUsuariosController,
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
  router.get("/obtenerLibrosPrestado", obtenerPrestadosController);
  router.get("/obtenerUsuarios", obtenerUsuariosController);
  return router;
};

export { getInitRoute };
