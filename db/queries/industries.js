import db from "#db/client";

export async function getIndustries(){
    const sql = `SELECT * FROM industries`;
    const {rows} = await db.query(sql);
    return rows;
}

export async function createIndustry(name, description) {
    const sql = `INSERT INTO industries(name, description)
    VALUES($1, $2)
    RETURNING *`;
    const {rows: [industries]} = await db.query(sql, [name, description])
    return industries
    
}

export async function getIndustriesById(id){
    const sql = `SELECT * FROM industries WHERE id = $1`;
    const {rows: [industry]} = await db.query(sql, [id]);
    return industry
}