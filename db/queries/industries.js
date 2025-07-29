import db from "#db/client";

export async function getIndustries(){
    const sql = `SELECT * FROM industries`;
    const {rows} = await db.query(sql);
    return rows;
}