import executeQuery from "../utils/db.js";

class Libro {
  id_libro;
  id_autor;
  id_categoria;
  id_editorial;
  titulo;
  anio_publicacion;
  isbn;
  num_paginas;
  id_estado;
  constructor() {}
  async obtenerEstadoLibros() {
    let sql = /*sql*/ `SELECT l.titulo AS titulo, e.nombre AS estado, e.descripcion AS descripcion
    FROM libro l
    INNER JOIN estado_libro e ON l.id_estado = e.id_estado`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
export { Libro };
