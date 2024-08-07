import { Router } from "express";
import { downloadYoutubeControll } from "../controllers/downloadYTController";
export const routerDownloadYoutube: Router = Router();

routerDownloadYoutube.get('/', downloadYoutubeControll);