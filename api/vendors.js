import express from "express";
const router = express.Router();
export default router;

import { createVendor, getVendors, deleteVendor, getVendorById } from "#db/queries/vendors"

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

router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const vendor = await getVendorById(id);
      if (vendor) {
        res.status(200).send(vendor);
      } else {
        res.status(404).send("Vendor Not Found");
      }
    } catch (error) {
      res.status(500).send("Failed To Get Vendor");
    }
  })
  .delete(async (req, res) => {
  const id = Number(req.params.id);
  try {
    const deletedVendor = await deleteVendor(id);
    if (deletedVendor) {
      res.status(200).send(deletedVendor);
    } else {
      res.status(404).send("Vendor Not Found");
    }
  } catch (error) {
    console.error("Delete vendor failed:", error); 
    res.status(500).send("Failed To Delete Vendor");
  }
});
