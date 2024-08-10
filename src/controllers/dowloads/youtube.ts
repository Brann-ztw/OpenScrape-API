import { Request, Response } from "express";
import axios from 'axios';
import { ReturnPromise, ReturnAxios} from "../../types/youtube";
import { parsedUrl } from "../../utils/parsedUrl";

const scraper = async(url: string): ReturnPromise => {
  const parsedURL = parsedUrl(url)
  if(!parsedURL) return 'invalid url';
  
  try {
    const { data } = await axios.post('https://www.ytfreedownloader.com/yt1/wp-json/aio-dl/video-data/', `url=${url}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
        'Accept-Language': 'es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3',
        'content-type': 'application/x-www-form-urlencoded'
      }
    }) as ReturnAxios;

     return {
      url: data.url,
      title: data.title, 
      thumbnail: data.thumbnail,
      media: data.medias
    }
  } catch (error) {
    console.error(error);
    return 'server error';
  }
};

export const youtubeControll = async(req: Request, res: Response): Promise<Response> => {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ message: 'URL is not defined' });

  try {
    const yt = await scraper(url);
    if (yt === 'invalid url') return res.status(400).json({ message: 'Invalid URL' });
    if (yt === 'server error') return res.status(500).json({ message: 'Internal server error' });
    return res.status(200).json(yt);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

