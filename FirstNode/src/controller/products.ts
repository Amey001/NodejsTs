import { Request,Response } from "express";
import ProductModel from "../models/prod";

import {createProduct,findAndUpdate,findProduct,deleteProduct} from '../services/products.service';

const HomeDetail=async (req: Request, res: Response)=>{
//getting the data from db
    // let mydata=await ProductModel.find();

    // Adding a product 
    const product=await createProduct({productName:"Shampoo",
        productPrice:200,
        productDetails:"smooth and silky"})
    let ob={
        x:12,y:30
    }
    let data = sumdata(ob);
    res.json({
        message:" Home Page Controller",
        data : data,
        mydata:product
    });
}

interface params{
    x:number;
    y:number;
}

//we have used a sumcheck to check whether the params we are getting are of type number if it is of any other type like string will crash the app 
type sumcheck=(x:params)=>number
const sumdata:sumcheck =(ob:params)=>{
    return ob.x+ob.y;
}

export {
    HomeDetail
}