import db from "#db/client";

export async function getTrailers() {
  const sql = `SELECT * FROM trailers`;
  const {rows} = await db.query(sql);
  return rows;
}

export async function getTrailersByMake(){
  const sql = `SELECT make FROM trailers`;
  const {rows} = await db.query(sql);
  return rows;
}