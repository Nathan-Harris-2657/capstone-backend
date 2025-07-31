import db from "#db/client";

export async function getEstimates(){
    const sql = `SELECT * FROM estimates`;
    const {rows} = await db.query(sql);
    return rows;
}

export async function saveEstimate(user_id, trailer_id, location, fees, tax, shipping, total_cost) {
    const sql = `INSERT INTO estimates(user_id, trailer_id, location, fees, tax, shipping, total_cost)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`;
    const {rows: [estimate]} = await db.query(sql, [user_id, trailer_id, location, fees, tax, shipping, total_cost]);
    return estimate;
}
