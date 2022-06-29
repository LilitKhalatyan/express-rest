"use strict";

const express = require("express");
const router = express.Router();
const RegionCtrl = require("../controllers/region-ctrl.js");

console.log("Running server -- region-router.js");

router.get("/", RegionCtrl.getRegionsController);
router.post("/", RegionCtrl.postRegionsController);
router.delete("/", RegionCtrl.deleteRegionsController);
router.put("/", RegionCtrl.editRegionsController);

module.exports = router;
