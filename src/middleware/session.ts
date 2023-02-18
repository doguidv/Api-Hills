import { Request,Response,NextFunction } from "express";
import { Jwt, JwtPayload, verify } from "jsonwebtoken";
import { RequesExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";

const checlJWT=(req:RequesExt,res:Response,next:NextFunction)=>{
    try{
        
        const JWTbyUser= req.headers.authorization || '';
        const jwt =JWTbyUser.split(' ').pop();

        const isUser = verifyToken(`${jwt}`)as {id:string}
        if(!isUser){
            res.status(401)
            res.send("No Tienes un jwt valido ")
        }else{
            req.user    =   isUser;
            console.log(JWTbyUser)
            next();
        }

    }catch(e){
        res.status(400)
        res.send('Session no valida')
    }
}

export {checlJWT}