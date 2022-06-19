"use strict";

const express = require("express");
const router = express.Router();
const StudCtrl = require("../controllers/stud-cntr.js");

console.log("Running server -- stud-router.js");

router.get("/", StudCtrl.getStudentsController);
router.post("/", StudCtrl.postStudentsController);
router.delete("/", StudCtrl.deleteStudentsController);
router.put("/", StudCtrl.editStudentsController);

module.exports = router;
