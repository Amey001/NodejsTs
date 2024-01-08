
import {Request,Response,Router} from 'express';
import {HomeDetail}  from '../controller/products';  

const router= Router();

router.get('/home',HomeDetail)

router.get('/login',(req:Request,res:Response)=>{
    res.send("Inside Login Page");
})

router.get('/signin',(req:Request,res:Response)=>{
    res.send("Inside Signin Page");
})

export {
    router
}
