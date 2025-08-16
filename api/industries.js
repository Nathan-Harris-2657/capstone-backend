import express from "express";
const router = express.Router();
export default router;

import { getIndustries, getIndustriesById, createIndustry } from "#db/queries/industries";

router
    .route("/")
    .get(async(req,res) =>{
        const industry = await getIndustries();
        res.send(industry);
    })
    .post(async(req,res) =>{
        const industrieData = req.body;
        const newindustrie = await createIndustry(industrieData);
        res.status(201).send(newindustrie);
    })

    
router  
    .route("/:id")
    .get(async(req,res) =>{
        const {id} = req.params;

        try {
            const industry = await getIndustriesById(id);
            if(industry){
                res.status(200).send(industry)
            }
            else{
                res.status(404).send("industry does not exist")
            }
            
        } catch (error) {
            res.status(500).send("can not get industry")
        }
    })