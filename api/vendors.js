import express from "express";
const router = express.Router();
export default router;

import { createVendor, getVendors } from "#db/queries/vendors"

router
    .route("/")
    .get(async(req,res) =>{
        const vendor = await getVendors()
        res.send (vendor)
    });

router
    .route("/")
    .post(async(req,res) =>{
        const vendorData = req.body;
        const newVendor = await createVendor(vendorData);
        res.status(201).send(newVendor);
    })