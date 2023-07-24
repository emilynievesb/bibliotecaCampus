import executeQuery from "../utils/db.js";

class Reserva {
  id_reserva;
  id_usuario;
  id_libro;
  fecha_reserva;
  fecha_reserva_fin;
  estado;
  constructor() {}
  async obtenerReservas() {
    let sql = /*sql*/ `SELECT u.nombre AS nombreUsuario, u.apellido AS apellidoUsuario, l.titulo AS nombreLibro,
        r.fecha_reserva AS desde, r.fecha_reserva_fin AS hasta, r.estado AS estado
        FROM reserva r
        INNER JOIN usuario u ON r.id_usuario = u.id_usuario
        INNER JOIN libro l ON r.id_libro = l.id_libro`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
export { Reserva };
