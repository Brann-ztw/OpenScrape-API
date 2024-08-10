import { Router } from "express";
import { pinterestController } from "../../controllers/search/pinterest";
export const routerPinterest: Router = Router();

routerPinterest.get('/', pinterestController);