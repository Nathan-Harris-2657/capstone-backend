import db from "#db/client";

export async function getVendors(){
    const sql = `SELECT name, location, contact_info FROM vendors`;
    const {rows} = await db.query(sql);
    return rows;
}