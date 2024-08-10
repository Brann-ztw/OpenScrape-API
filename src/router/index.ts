import express, { Application, Request, Response } from 'express';
import { routerYoutube } from './downloader/yotubeRouter';
import { routerInstagram } from './downloader/intagramRouter'
import { routerMediafire } from './downloader/mediafireControll';
import { routerSpotify } from './downloader/spotify';
import path from 'path';
export const app: Application = express();
 
app.use('/api/download/youtube', routerYoutube);
app.use('/api/download/instagram', routerInstagram);
app.use('/api/download/mediafire', routerMediafire);
app.use('/api/download/spotify', routerSpotify);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '..', 'public', 'main', 'index.html'));
});

app.get('/downloads', (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '..', 'public', 'downloads', 'index.html'));
});