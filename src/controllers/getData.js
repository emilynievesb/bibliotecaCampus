import {
  obtenerCategoriasDisponibles,
  obtenerTodosLosAutores,
} from "../services/getServices.js";

const obtenerTodosLosAutoresController = async (req, res, next) => {
  try {
    const result = await obtenerTodosLosAutores();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerCategoriasDisponiblesController = async (req, res, next) => {
  try {
    const result = await obtenerCategoriasDisponibles();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  obtenerTodosLosAutoresController,
  obtenerCategoriasDisponiblesController,
};
