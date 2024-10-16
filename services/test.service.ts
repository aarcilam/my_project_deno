import db from "../db/db.ts";

export async function getHello() {
  let users;

  try {
    // Ejecutar la consulta y recorrer los resultados
    const stmt = db.prepare("SELECT * FROM users");
    users = stmt.all();
    console.log(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }

  return users;
}
