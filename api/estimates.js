import express from "express";
const router = express.Router();
export default router;

import { getEstimates, saveEstimate } from "#db/queries/estimates";

router
    .route("/")
    .get(async(req,res) =>{
        const estimate = await getEstimates();
        res.send(estimate);
    })

router
  .route("/saved_estimates")
  .post(async (req, res) => {
    const { user_id, trailer_id, location, fees, tax, shipping, total_cost } = req.body;

    try {
      const estimate = await saveEstimate(user_id, trailer_id, location, fees, tax, shipping, total_cost);
      res.status(201).send(estimate);
    } catch (error) {
      console.error("Error saving estimate:", error);
      res.status(500).send("Failed to save estimate");
    }
  });
