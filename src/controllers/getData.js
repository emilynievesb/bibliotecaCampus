import {
  obtenerCategoriasDisponibles,
  obtenerEditoriales,
  obtenerEstadoLibro,
  obtenerLibros,
  obtenerPrestamos,
  obtenerReservas,
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

const obtenerEditorialesController = async (req, res, next) => {
  try {
    const result = await obtenerEditoriales();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerEstadoLibroController = async (req, res, next) => {
  try {
    const result = await obtenerEstadoLibro();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerLibrosController = async (req, res, next) => {
  try {
    const result = await obtenerLibros();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerPrestamosController = async (req, res, next) => {
  try {
    const result = await obtenerPrestamos();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerReservasController = async (req, res, next) => {
  try {
    const result = await obtenerReservas();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  obtenerTodosLosAutoresController,
  obtenerCategoriasDisponiblesController,
  obtenerEstadoLibroController,
  obtenerEditorialesController,
  obtenerLibrosController,
  obtenerPrestamosController,
  obtenerReservasController,
};
