import { Router } from "express";
import { getFile } from "../Controllers/orders";

const router= Router()

router.get ('/',getFile,)

export {router};