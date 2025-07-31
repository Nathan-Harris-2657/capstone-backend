import express from "express";
const router = express.Router();
export default router;

import { getVendors } from "#db/queries/vendors"

router
    .route("/")
    .get(async(req,res) =>{
        const vendor = await getVendors()
        res.send (vendor)
    })