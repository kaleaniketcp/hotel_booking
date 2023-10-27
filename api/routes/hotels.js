const express = require("express");
const Hotel = require("../models/Hotel");
const createHotel = require("../controllers/hotel");
const updateHotel = require("../controllers/hotel");
const deleteHotel = require("../controllers/hotel");
const getHotel = require("../controllers/hotel");
const getHotels = require("../controllers/hotel");

const router = express.Router();

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getHotels);

module.exports = router;
