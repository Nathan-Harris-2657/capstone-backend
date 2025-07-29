import db from "#db/client";

export async function getEstimates(){
    const sql = `SELECT * FROM estimates`;
    const {rows} = await db.query(sql);
    return rows;
}