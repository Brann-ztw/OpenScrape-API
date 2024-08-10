import { Router } from "express";
import { npmjsController } from "../../controllers/search/npmj";
export const routerNpmj: Router = Router();

routerNpmj.get('/', npmjsController);