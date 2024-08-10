import { Router } from "express";
import { spotifyController } from "../../controllers/dowloads/spotify";
export const routerSpotify: Router = Router();

routerSpotify.get('/', spotifyController);