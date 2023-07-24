import {
  obtenerCategoriasDisponibles,
  obtenerEditoriales,
  obtenerEstadoLibro,
  obtenerLibros,
  obtenerLibrosDisponibles,
  obtenerLibrosLargos,
  obtenerLibrosPorAutor,
  obtenerLibrosPorCategoria,
  obtenerPrestados,
  obtenerPrestamos,
  obtenerPrestamosPorUsuario,
  obtenerReservas,
  obtenerTodosLosAutores,
  obtenerUsuarios,
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

const obtenerLibrosDisponiblesController = async (req, res, next) => {
  try {
    const result = await obtenerLibrosDisponibles();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerPrestadosController = async (req, res, next) => {
  try {
    const result = await obtenerPrestados();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerUsuariosController = async (req, res, next) => {
  try {
    const result = await obtenerUsuarios();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerLibrosPorAutorController = async (req, res, next) => {
  try {
    const { nombre } = req.query;
    const result = await obtenerLibrosPorAutor(nombre);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerLibrosPorCategoriaController = async (req, res, next) => {
  try {
    const { categoria } = req.query;
    const result = await obtenerLibrosPorCategoria(categoria);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerPrestamosPorUsuarioController = async (req, res, next) => {
  try {
    const { usuario } = req.query;
    const result = await obtenerPrestamosPorUsuario(usuario);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerLibrosLargosController = async (req, res, next) => {
  try {
    const result = await obtenerLibrosLargos();
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
  obtenerLibrosDisponiblesController,
  obtenerPrestadosController,
  obtenerUsuariosController,
  obtenerLibrosPorAutorController,
  obtenerLibrosPorCategoriaController,
  obtenerPrestamosPorUsuarioController,
  obtenerLibrosLargosController,
};
