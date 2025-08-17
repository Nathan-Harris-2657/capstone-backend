import db from "#db/client";

export async function getVendors(){
    const sql = `SELECT name, location, contact_info, ratings FROM vendors`;
    const {rows} = await db.query(sql);
    return rows;
}

export async function createVendor({ name, location, contact_info, ratings}) {
  const sql = `
    INSERT INTO vendors(name, location, contact_info, ratings)
    VALUES($1, $2, $3, $4)
    RETURNING *`;
  const { rows: [vendor] } = await db.query(sql, [name, location, contact_info, ratings]);
  return vendor;
}

export async function getVendorById(id) {
  const sql = `
    SELECT id, name, location, contact_info, ratings
    FROM vendors
    WHERE id = $1;
  `;
  const { rows: [vendor] } = await db.query(sql, [id]);
  return vendor;
}


export async function deleteVendor(id) {
  const sql = `
    DELETE FROM vendors
    WHERE id = $1
    RETURNING *;
  `;
  const { rows: [deletedVendor] } = await db.query(sql, [id]);
  return deletedVendor;
}
