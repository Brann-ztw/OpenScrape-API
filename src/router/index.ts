import express, { Application} from 'express';
import { routerDownloadYoutube } from './downloadYoutubeRouter';
export const app: Application = express();
 
app.use('/download/yt', routerDownloadYoutube);


