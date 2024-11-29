import express from "express"
import fetch from "node-fetch"

const router = express.Router();

router.get("/", (req,res) => res.json({success: "Weather is good.", failure: "Weather is bad."
}));

 export default router 