const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");


router.get("/", (req,res) => res.json({success: "Weather is good.", failure: "Weather is bad."
}));

module.exports = router;