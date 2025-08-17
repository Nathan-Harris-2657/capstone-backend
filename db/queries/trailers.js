import db from "#db/client";

export async function getTrailers(){
  const sql = `SELECT * FROM trailers`;
  const {rows} = await db.query(sql);
  return rows;
}

export async function createTrailer({ type, make, model, year, specs, images, price }) {
  const sql = `
    INSERT INTO trailers(type, make, model, year, specs, images, price)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`;
  const { rows: [trailer] } = await db.query(sql, [type, make, model, year, specs, images, price]);
  return trailer;
}



export async function getTrailersById(id){
  const sql = `SELECT * FROM trailers WHERE id = $1`;
  const {rows: [trailer]} = await db.query(sql, [id]);
  return trailer;
}


export async function deleteTrailer(id) {
  const sql = `
    DELETE FROM trailers
    WHERE id = $1
    RETURNING *;
  `;
  const { rows: [deletedTrailer] } = await db.query(sql, [id]);
  return deletedTrailer;
}
