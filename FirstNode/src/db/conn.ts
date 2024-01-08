// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/Product", {
//     // useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Mongodb connection successful");
//   })
//   .catch((e : string) => {
//     console.log("No connection",e);
//   });

// Using MongoClient

// import { MongoClient } from "mongodb";

// async function connectToMongoDB() {
//   const uri = "mongodb://127.0.0.1:27017/Product";


//   try {
//     const client = await MongoClient.connect(uri);
//     console.log("MongoDB connection successful");
    
//     // Perform any operations using the client if needed
    
//     // Close the connection when done
//     await client.close();
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//   }
// }

// connectToMongoDB();


import mongoose from "mongoose";
import {connect} from 'mongoose'

function connects(){
  return connect('mongodb://127.0.0.1:27017/Product')
.then(()=>{
  console.log("db connected")
}).catch((error:any)=>{
  console.log(error)
})
}

export default connects;