import { Router } from "express";
import { downloadIgController } from "../controllers/intagramControll";
export const routerDownloadInstagram: Router = Router();

routerDownloadInstagram.get('/', downloadIgController);