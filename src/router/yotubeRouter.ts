import { Router } from "express";
import { downloadYoutubeControll } from "../controllers/youtubeControll";
export const routerDownloadYoutube: Router = Router();

routerDownloadYoutube.get('/', downloadYoutubeControll);