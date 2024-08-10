import express, { Application, Request, Response } from 'express';
import { routerDownloadYoutube } from './yotubeRouter';
import { routerDownloadInstagram } from './intagramRouter'
import path from 'path';
export const app: Application = express();
 
app.use('/download/yt', routerDownloadYoutube);
app.use('/download/ig', routerDownloadInstagram);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})


