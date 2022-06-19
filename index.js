"use strict";

const port = process.env.MY_APP_PORT || 3000;

const express = require("express");
const studRouter = require("./routers/stud-router.js");

const app = express();
const json = express.json();
app.use(json);

app.use("/students", studRouter);

app.listen(port, () => console.log("Running server -- index.js"));
