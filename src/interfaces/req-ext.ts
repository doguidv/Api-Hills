import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
 export interface RequesExt extends Request{
    user?:   JwtPayload |{id:string}
}
