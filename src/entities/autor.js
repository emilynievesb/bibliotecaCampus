import executeQuery from "../utils/db.js";

class Autor {
  id_autor;
  nombre;
  apellido;
  nacionalidad;
  constructor() {}
  async obtenerTodosLosAutores() {
    let sql = /*sql*/ `SELECT nombre, apellido, nacionalidad FROM autor;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Autor };
