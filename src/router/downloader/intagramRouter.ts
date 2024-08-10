import { Router } from "express";
import { instagramController } from "../../controllers/dowloads/intagram";
export const routerInstagram: Router = Router();

routerInstagram.get('/', instagramController);