import db from "#db/client";

export async function getVendors(){
    const sql = `SELECT name, location, contact_info, ratings FROM vendors`;
    const {rows} = await db.query(sql);
    return rows;
}

export async function createVendor(){
    const sql = `
    INSERT INTO vendors(name, location, contact_info, ratings, reviews, trailer_types)
    VALUES($1, $2, $3, $4, $5, $6)
    RETURNING *`
    const {rows: [vendors]} = await db.query(sql, [name, location, contact_info, ratings, reviews, trailer_types]);
  return vendors;
}