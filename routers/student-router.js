"use strict";

const express = require("express");
const router = express.Router();
const StudentCtrl = require("../controllers/student-ctrl.js");

console.log("Running server -- stud-router.js");

router.get("/", StudentCtrl.getStudentsController);
router.post("/", StudentCtrl.postStudentsController);
router.delete("/", StudentCtrl.deleteStudentsController);
router.put("/", StudentCtrl.editStudentsController);

module.exports = router;
