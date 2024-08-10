import { Router } from "express";
import { tiktokController } from "../../controllers/dowloads/tiktok";
export const routerTikTok: Router = Router();

routerTikTok.get('/', tiktokController);