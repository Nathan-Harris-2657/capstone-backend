import express from "express";
const router = express.Router();
export default router;

import { getTrailers } from "#db/queries/trailers";

router
    .route("/trailers")
    .get(async(req , res) =>{
        const trailers = await getTrailers();
        res.send(trailers);
    })