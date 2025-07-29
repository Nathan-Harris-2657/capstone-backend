import db from "#db/client";

export async function getTrailers(){
  const sql = `SELECT * FROM trailers`;
  const {trailers} = await db.query(sql);
  return trailers;
}

export async function createTrailer({ type, make, model, specs, images }) {
  const sql = `
    INSERT INTO trailers(type, make, model, specs, images)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *`;
  const {rows: [trailer]} = await db.query(sql, [type, make, model, specs, images]);
  return trailer;
}


export async function getTrailersById(id){
  const sql = `SELECT * FROM trailers WHERE id = $1`;
  const {rows: [trailer]} = await db.query(sql, [id]);
  return trailer;
}

