 import {sign,verify } from "jsonwebtoken";

 const JWt_Secret =process.env.JWt_Secret||"token.101010101";

 const generateToken = (id:string) => {
    const JWT=   sign({id},JWt_Secret,{
        expiresIn:"2h"
    })
    
    return JWT;
 }


 const verifyToken= (jwt:string) => {
   const isOK= verify(jwt,JWt_Secret)
   return isOK;
 }
 export {generateToken,verifyToken}