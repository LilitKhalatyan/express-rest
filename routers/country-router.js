"use strict";

const express = require("express");
const router = express.Router();
const CountryCtrl = require("../controllers/country-ctrl.js");

console.log("Running server -- region-router.js");

router.get("/", CountryCtrl.getCountriesController);
router.post("/", CountryCtrl.postCountriesController);
router.delete("/", CountryCtrl.deleteCountriesController);
router.put("/", CountryCtrl.editCountriesController);

module.exports = router;
