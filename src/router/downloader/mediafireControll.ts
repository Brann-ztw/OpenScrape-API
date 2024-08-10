import { Router } from "express";
import { mediafireController } from "../../controllers/dowloads/mediafire";
export const routerMediafire: Router = Router();

routerMediafire.get('/', mediafireController);