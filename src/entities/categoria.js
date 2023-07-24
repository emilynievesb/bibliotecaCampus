import executeQuery from "../utils/db.js";

class Categoria {
  id_categoria;
  nombre;
  constructor() {}
  async obtenerCategorias() {
    let sql = /*sql*/ `SELECT nombre FROM categoria;`;
    try {
      const result = await executeQuery(sql);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

export { Categoria };
