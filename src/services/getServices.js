import { Autor } from "../entities/autor.js";
import { Categoria } from "../entities/categoria.js";
import { Editorial } from "../entities/editorial.js";
import { Libro } from "../entities/libro.js";
import { Prestamo } from "../entities/prestamo.js";
import { Reserva } from "../entities/reserva.js";

const obtenerTodosLosAutores = async () => {
  const autor = new Autor();
  return await autor.obtenerTodosLosAutores();
};

const obtenerCategoriasDisponibles = async () => {
  const categoria = new Categoria();
  return await categoria.obtenerCategorias();
};

const obtenerEditoriales = async () => {
  const editorial = new Editorial();
  return await editorial.obtenerEditoriales();
};

const obtenerEstadoLibro = async () => {
  const libro = new Libro();
  return await libro.obtenerEstadoLibros();
};

const obtenerLibros = async () => {
  const libro = new Libro();
  return await libro.obtenerLibros();
};

const obtenerPrestamos = async () => {
  const prestamo = new Prestamo();
  return await prestamo.obtenerPrestamos();
};

const obtenerReservas = async () => {
  const reserva = new Reserva();
  return await reserva.obtenerReservas();
};

const obtenerLibrosDisponibles = async () => {
  const libro = new Libro();
  return await libro.obtenerLibrosDisponibles();
};

const obtenerPrestados = async () => {
  const prestamo = new Prestamo();
  return await prestamo.obtenerPrestados();
};

export {
  obtenerTodosLosAutores,
  obtenerCategoriasDisponibles,
  obtenerEditoriales,
  obtenerEstadoLibro,
  obtenerLibros,
  obtenerPrestamos,
  obtenerReservas,
  obtenerLibrosDisponibles,
  obtenerPrestados,
};
