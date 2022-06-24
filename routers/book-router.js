"use strict";

const express = require("express");
const router = express.Router();
const BookCtrl = require("../controllers/book-ctrl.js");

console.log("Running server -- book-router.js");

router.get("/", BookCtrl.getBookController);
router.post("/", BookCtrl.postBookController);
router.delete("/", BookCtrl.deleteBookController);
router.put("/", BookCtrl.editBookController);

module.exports = router;
