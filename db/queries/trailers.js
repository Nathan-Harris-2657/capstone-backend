import db from "#db/client";

export async function getTrailers(){
  const sql = `SELECT * FROM trailers`;
  const {trailers} = await db.query(sql);
  return trailers;
}

export async function getTrailersById(id){
  const sql = `SELECT * FROM trailers WHERE id = $1`;
  const { rows: [trailer]} = await db.query(sql, [id]);
  return trailer;
}

