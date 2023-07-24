import { Autor } from "../entities/autor.js";
import { Categoria } from "../entities/categoria.js";

const obtenerTodosLosAutores = async () => {
  const autor = new Autor();
  return await autor.obtenerTodosLosAutores();
};

const obtenerCategoriasDisponibles = async () => {
  const categoria = new Categoria();
  return await categoria.obtenerCategorias();
};

export { obtenerTodosLosAutores, obtenerCategoriasDisponibles };
