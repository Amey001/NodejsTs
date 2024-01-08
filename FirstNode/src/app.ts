import  { Application, Request, Response} from "express";
import * as  express from "express";   //we can use * for importing 

import connects from './db/conn'
// require("./db/conn");
import {router} from './routes/routes'

// import { ProductData } from "./models/prod";

const app:Application = express();
const port:number |string = process.env.PORT || 3000;

app.use('/', router);

app.get('/',(req:Request,res:Response) => {
  res.send("Default Get message !");
})

connects()

app.listen(port, ():void => {
  console.log(`Server is listening on port ${port}`);
});



