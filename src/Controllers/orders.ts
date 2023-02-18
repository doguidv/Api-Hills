import { Response,Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequesExt } from "../interfaces/req-ext";
import { handleHttp } from "../utils/error.handle";
// import db from  '../config/mongo'
// import {registerUpload} from '../service/storage'

export const getFile=async (req:RequesExt,res:Response) => {
    try{
        res.send ({
        data:"Esto solo lo ven personas autorizadas ",
        user: req.user
    })
   
    
    }catch(e){
    handleHttp(res,"ERRor")
    }
}
