import { Autor } from "../entities/autor.js";
import { Categoria } from "../entities/categoria.js";
import { Editorial } from "../entities/editorial.js";

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

export {
  obtenerTodosLosAutores,
  obtenerCategoriasDisponibles,
  obtenerEditoriales,
};
