import express, { Application} from 'express';
import { routerDownloadYoutube } from './yotubeRouter';
import { routerDownloadInstagram } from './intagramRouter'
export const app: Application = express();
 
app.use('/download/yt', routerDownloadYoutube);
app.use('/download/ig', routerDownloadInstagram);


