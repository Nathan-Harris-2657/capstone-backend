import express from "express";
const router = express.Router();
export default router;

import { getTrailers, getTrailersById } from "#db/queries/trailers";

router
    .route("/")
    .get(async(req,res) =>{
        const trailers = await getTrailers();
        res.send(trailers);
    })

router  
    .route("/:id")
    .get(async(req,res) =>{
        const {id} = req.params;

        try {
            const trailer = await getTrailersById(id);
            if(trailer){
                res.status(200).send(trailer)
            }
            else{
                res.status(404).send("Trailer Not Found")
            }
            
        } catch (error) {
            res.status(500).send("Failed To Get Trailers")
        }
    })
