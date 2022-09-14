import express from 'express';
import mongoose from "mongoose"
import { join } from 'path';

import web from "./routes/web.js";
const app = express()
const port = process.env.PORT || '3000'
import bodyParser from 'body-parser';
 
var mongoAtlasUri = "mongodb+srv://admin:admin@cluster0.b8fwodu.mongodb.net/userDemoDb"
try {
     
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }


app.use(express.urlencoded({extended:false}))


app.use(express.static(join(process.cwd(), "public")))

app.use(express.static("upload"))


app.use("/", web);


app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})