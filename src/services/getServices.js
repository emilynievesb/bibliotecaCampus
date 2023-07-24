import { Autor } from "../entities/autor.js";

const obtenerTodosLosAutores = async () => {
  const autor = new Autor();
  return await autor.obtenerTodosLosAutores();
};

export { obtenerTodosLosAutores };
