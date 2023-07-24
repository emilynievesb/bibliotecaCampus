import { Usuario } from "../entities/usuario.js";
import { SignJWT } from "jose";

const loginUsuario = async (id, telefono) => {
  const usuario = new Usuario();
  usuario.id_usuario = id;
  usuario.telefono = telefono;
  const result = await usuario.autenticacionUsuario();
  if (result[0].count !== 1) {
    throw new Error("No existe ese usuario, por favor registrese");
  }
  const { nombre, apellido, email } = result[0];
  let json = {
    id,
    nombre,
    apellido,
    email,
    telefono,
  };
  const encoder = new TextEncoder();
  const jwtconstructor = new SignJWT({ json });
  const jwt = await jwtconstructor
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
  return jwt;
};

export { loginUsuario };
