import { Autor } from "../entities/autor.js";
import { Categoria } from "../entities/categoria.js";
import { Editorial } from "../entities/editorial.js";
import { Libro } from "../entities/libro.js";
import { Prestamo } from "../entities/prestamo.js";
import { Reserva } from "../entities/reserva.js";
import { Usuario } from "../entities/usuario.js";

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

const obtenerUsuarios = async () => {
  const usuario = new Usuario();
  return await usuario.obtenerUsuarios();
};

const obtenerLibrosPorAutor = async (nombre) => {
  const libro = new Libro();
  libro.nombre_autor = nombre;
  return await libro.obtenerLibrosPorAutor();
};

const obtenerLibrosPorCategoria = async (categoria) => {
  const libro = new Libro();
  libro.nombre_categoria = categoria;
  return await libro.obtenerLibrosPorCategoria();
};

const obtenerPrestamosPorUsuario = async (nombre) => {
  const prestamo = new Prestamo();
  prestamo.nombre_usuario = nombre;
  return await prestamo.obtenerPrestamosPorUsuario();
};

const obtenerLibrosLargos = async () => {
  const libro = new Libro();
  return await libro.obtenerLibrosLargos();
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
  obtenerUsuarios,
  obtenerLibrosPorAutor,
  obtenerLibrosPorCategoria,
  obtenerPrestamosPorUsuario,
  obtenerLibrosLargos,
};
