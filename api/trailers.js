import express from "express";
const router = express.Router();
export default router;

import { getTrailers, getTrailersById, createTrailer, deleteTrailer } from "#db/queries/trailers";

router
    .route("/")
    .get(async(req,res) =>{
        const trailers = await getTrailers();
        res.send(trailers);
    })


router
    .route("/")
    .post(async(req,res) =>{
        const trailerData = req.body;
        const newTrailer = await createTrailer(trailerData);
        res.status(201).send(newTrailer);
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
    .delete(async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await deleteTrailer(id);
      if (deleted) {
        res.status(200).send(deleted);
      } else {
        res.status(404).send("Trailer Not Found");
      }
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).send("Failed To Delete Trailer");
    }
  });


