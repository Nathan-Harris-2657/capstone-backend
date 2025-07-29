import db from "#db/client";

export async function getIndustries(){
    const sql = `SELECT * FROM industries`;
    const {rows} = await db.query(sql);
    return rows;
}

export async function getIndustriesById(id){
    const sql = `SELECT * FROM industries WHERE id = $1`;
    const {rows: [industries]} = await db.query(sql, id);
    return industries
}