import { loginUsuario } from "../services/postServices.js";

const loginUsuarioController = async (req, res, next) => {
  try {
    const { id, telefono } = req.body;
    const result = await loginUsuario(id, telefono);
    res.cookie("User", result, { maxAge: 600000, httpOnly: true });
    console.log(result);
    res.send({ result });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export { loginUsuarioController };
