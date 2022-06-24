"use strict";

const port = process.env.MY_APP_PORT || 3000;

const express = require("express");
const studRouter = require("./routers/stud-router.js");
const bookRouter = require("./routers/book-router.js");
const mongoose = require("mongoose");

const app = express();
const json = express.json();
app.use(json);

( async () => {
    await mongoose.connect('mongodb://localhost:27017/university');
})();



app.use("/students", studRouter);
app.use("/books", bookRouter);

app.listen(port, () => console.log("Running server -- index.js"));
