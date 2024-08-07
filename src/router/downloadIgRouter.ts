import { Router } from "express";
import { downloadIgController } from "../controllers/downloadIGControll";
export const routerDownloadInstagram: Router = Router();

routerDownloadInstagram.get('/', downloadIgController);