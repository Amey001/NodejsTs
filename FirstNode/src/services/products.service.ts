import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
// import { DocumentDefinition } from "mongoose";
import Product, { ProductDocument,ProductInput } from "../models/prod";

export function createProduct(input:ProductInput ) {
  return Product.create(input)
}

export function findProduct(query:FilterQuery<ProductDocument>,options:QueryOptions = {lean: true}){
    return Product.find(query,{},options);
}

export function findAndUpdate(
    query:FilterQuery<ProductDocument>,
    update:UpdateQuery<ProductDocument>,
    options:QueryOptions 
){
    return Product.findOneAndUpdate(query,update,options);
}

export function deleteProduct(query:FilterQuery<ProductDocument>,){
    return Product.deleteOne(query);
}