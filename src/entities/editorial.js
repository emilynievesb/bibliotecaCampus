import executeQuery from "../utils/db.js";

class Editorial {
  id_editorial;
  nombre;
  direccion;
  telefono;
  constructor() {}
  async obtenerEditoriales() {
    let sql = /*sql*/ `SELECT nombre, direccion FROM editorial`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
export { Editorial };
