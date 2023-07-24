import { Router } from "express";
import { loginUsuarioController } from "../controllers/postData.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/login", loginUsuarioController);
  return router;
};

export { postInitRoute };
