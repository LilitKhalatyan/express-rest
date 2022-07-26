"use strict";

const port = process.env.MY_APP_PORT || 3000;

const express = require("express");
const studentRouter = require("./routers/student-router.js");
const regionRouter = require("./routers/region-router.js");
const countryRouter = require("./routers/country-router.js");
const mongoose = require("mongoose");

const app = express();
const json = express.json();
app.use(json);

( async () => {
    await mongoose.connect('mongodb://localhost:27017/university');
})();

const staticFiles = express.static('./front');
app.use(staticFiles);

app.use("/students", studentRouter);
app.use("/regions", regionRouter);
app.use("/countries", countryRouter);


app.listen(port, () => console.log(`Running server -- ${port} at index.js`));
