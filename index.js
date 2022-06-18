import express from "express";
const app = express();
const port = process.env.MY_APP_PORT;
import { StudCtrl } from './controllers/studCtrl.js';


app.get("/students", StudCtrl.getStudentsController);
app.post("/students", StudCtrl.postStudentsController);
app.delete("/students", StudCtrl.deleteStudentsController);
app.put("/students", StudCtrl.editStudentsController);

app.listen(port || 3000);