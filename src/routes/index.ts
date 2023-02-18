import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = __dirname;
const router = Router();

const cleanFilesName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

const files = readdirSync(PATH_ROUTER);
files.forEach((fileName) => {
  const cleanName = cleanFilesName(fileName);
  if (cleanName !== "index") {
    const module = require(`./${cleanName}`);
    if (module.router) {
      router.use(`/${cleanName}`, module.router);
    }
  }
});

export { router };
