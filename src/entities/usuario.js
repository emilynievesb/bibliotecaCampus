import executeQuery from "../utils/db.js";

class Usuario {
  id_usuario;
  nombre;
  apellido;
  direccion;
  telefono;
  email;
  constructor() {}
  async autenticacionUsuario() {
    let sql = /*sql*/ `SELECT COUNT(*) AS count, nombre, apellido, email FROM usuario
    WHERE id_usuario = ${this.id_usuario} AND telefono = \"${this.telefono}\"`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Usuario };
