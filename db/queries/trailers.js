import db from "#db/client";

export async function getTrailers(username, password, role) {
  const sql = `
  INSERT INTO users
    (username, password, role)
  VALUES
    ($1, $2, $3)
  RETURNING *
  `;
  const hashedPassword = await bcrypt.hash(password, 10);
  const {
    rows: [user],
  } = await db.query(sql, [username, hashedPassword, role]);
  return user;
}