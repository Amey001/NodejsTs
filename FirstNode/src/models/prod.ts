// import * as express from 'express';

// const mongoose=require('mongoose');

// const prodSchema= new mongoose.Schema({
//     productName:{
//         type: 'string',
//         required: true,
//         unique: true,
//         trim: true,
//     },
//     productPrice:{
//         type: 'number',
//         required: true,
//         trim : true,
//     },
//     productDetails :{
//         type: 'string',
//         required: true,
//         trim : true,
//     }
// })

// //created a new collection
// const ProductData=new mongoose.Model("ProductData",prodSchema);

// module.exports =ProductData;

import {Schema,model,Document} from 'mongoose'

export interface ProductInput{
    productName:string;
    productPrice:number;
    productDetails:string;
}

export interface ProductDocument extends ProductInput,Document{
    productName:string;
    productPrice:number;
    productDetails:string;
}
interface Product{
    productName:string;
    productPrice:number;
    productDetails:string;
}

const prodSchema=new Schema<Product>({
    
    productName:{
                type: 'string',
                required: true,
               
            },
            productPrice:{
                type: 'number',
                required: true,
                trim : true,
            },
            productDetails :{
                type: 'string',
                required: true,
                trim : true,
            }
})

const ProductModel=model<Product>('Product',prodSchema);

export default ProductModel;