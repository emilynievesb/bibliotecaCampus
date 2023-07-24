import executeQuery from "../utils/db.js";

class Prestamo {
  id_prestamo;
  id_usuario;
  id_libro;
  fecha_prestamo;
  fecha_devolucion;
  estado;
  constructor() {}
  async obtenerPrestamos() {
    let sql = /*sql*/ `SELECT u.nombre AS nombreUsuario, u.apellido AS apellidoUsuario, l.titulo AS nombreLibro,
    p.fecha_prestamo AS fechaPrestamo, p.fecha_devolucion AS fechaDevolucion, p.estado AS estado
    FROM prestamo p
    INNER JOIN usuario u ON p.id_usuario = u.id_usuario
    INNER JOIN libro l ON p.id_libro = l.id_libro`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  async obtenerPrestados() {
    let sql = /*sql*/ `SELECT u.nombre AS nombreUsuario, u.apellido AS apellidoUsuario, l.titulo AS nombreLibro,
    p.fecha_devolucion AS fechaDevolucion
    FROM prestamo p
    INNER JOIN usuario u ON p.id_usuario = u.id_usuario
    INNER JOIN libro l ON p.id_libro = l.id_libro
    WHERE p.estado = "Prestado"`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Prestamo };
