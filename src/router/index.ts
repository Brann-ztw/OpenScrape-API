import express, { Application} from 'express';
import { routerDownloadYoutube } from './downloadYoutubeRouter';
import { routerDownloadInstagram } from './downloadIgRouter'
export const app: Application = express();
 
app.use('/download/yt', routerDownloadYoutube);
app.use('/download/ig', routerDownloadInstagram);


