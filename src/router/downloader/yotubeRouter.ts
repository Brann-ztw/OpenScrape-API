import { Router } from "express";
import { youtubeControll } from "../../controllers/dowloads/youtube";
export const routerYoutube: Router = Router();

routerYoutube.get('/', youtubeControll);