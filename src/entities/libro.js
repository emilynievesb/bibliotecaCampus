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
  nombre_autor;
  nombre_categoria;
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
  async obtenerLibros() {
    let sql = /*sql*/ `SELECT l.titulo, a.nombre AS autor, e.nombre AS editorial
    FROM libro l
    INNER JOIN autor a ON l.id_autor = a.id_autor
    INNER JOIN editorial e ON l.id_editorial = e.id_editorial
    `;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerLibrosDisponibles() {
    let sql = /*sql*/ `SELECT l.titulo AS titulo, c.nombre AS categoria, a.nombre AS autor, e.nombre AS editorial
    FROM libro l
    INNER JOIN categoria c ON l.id_categoria = c.id_categoria
    INNER JOIN autor a ON l.id_autor = a.id_autor
    INNER JOIN editorial e ON l.id_editorial = e.id_editorial
    WHERE l.id_estado = 1`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerLibrosPorAutor() {
    let sql = /*sql*/ `SELECT l.titulo AS titulo, c.nombre AS categoria, e.nombre AS editorial
    FROM libro l
    INNER JOIN categoria c ON l.id_categoria = c.id_categoria
    INNER JOIN autor a ON l.id_autor = a.id_autor
    INNER JOIN editorial e ON l.id_editorial = e.id_editorial
    WHERE CONCAT(a.nombre,\" \",a.apellido) = \"${this.nombre_autor}\"`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerLibrosPorCategoria() {
    let sql = /*sql*/ `SELECT l.titulo AS titulo, a.nombre AS autor, e.nombre AS editorial
    FROM libro l
    INNER JOIN categoria c ON l.id_categoria = c.id_categoria
    INNER JOIN autor a ON l.id_autor = a.id_autor
    INNER JOIN editorial e ON l.id_editorial = e.id_editorial
    WHERE c.nombre = \"${this.nombre_categoria}\"`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerLibrosLargos() {
    let sql = /*sql*/ `SELECT l.titulo AS titulo,  c.nombre AS categoria, a.nombre AS autor, e.nombre AS editorial,
    l.num_paginas AS paginas
    FROM libro l
    INNER JOIN categoria c ON l.id_categoria = c.id_categoria
    INNER JOIN autor a ON l.id_autor = a.id_autor
    INNER JOIN editorial e ON l.id_editorial = e.id_editorial
    WHERE l.num_paginas >= 500`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerLibrosJapones() {
    let sql = /*sql*/ `SELECT l.titulo AS titulo,  c.nombre AS categoria, a.nombre AS autor, e.nombre AS editorial,
    l.num_paginas AS paginas
    FROM libro l
    INNER JOIN categoria c ON l.id_categoria = c.id_categoria
    INNER JOIN autor a ON l.id_autor = a.id_autor
    INNER JOIN editorial e ON l.id_editorial = e.id_editorial
    WHERE a.nacionalidad = "Japonés"`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
export { Libro };
