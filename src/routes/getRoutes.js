import { Router } from "express";
import { obtenerTodosLosAutoresController } from "../controllers/getData.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerAutores", obtenerTodosLosAutoresController);
  return router;
};

export { getInitRoute };
