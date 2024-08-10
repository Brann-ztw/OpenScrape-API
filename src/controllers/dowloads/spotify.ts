import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { parsedUrl } from '../../utils/parsedUrl';
import { axiosResponse } from '../../types/spotify';

const scraper = async(url: string): Promise<axiosResponse> => {
  const parsedURL: boolean = parsedUrl(url)
  if(!parsedURL) return 'invalid url';

  try {
    const { data } = await axios.get('https://spotifydownloaders.com/api/getSpotifyDetails?url=https://open.spotify.com/track/4KFG5ciFzeBOh2Hlzfwbwa?si=d7MDbEpgT-aFKy0Q73dMVQ') as AxiosResponse<any, any>;
    return {
      tile: data.preview.title,
      artist: data.preview.artist,
      image: data.preview.image,
      audio: data.preview.audio
    }
  } catch (error) {
    return 'server error';
  }
}


export const spotifyController = async(req: Request, res:Response): Promise<Response> => {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ message: 'URL is not defined' });

  try {
    const spotify = await scraper(url);
    if (spotify === 'invalid url') return res.status(400).json({ message: 'Invalid URL' });
    if (spotify === 'server error') return res.status(500).json({ message: 'Internal server error' });
    return res.status(200).json(spotify);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}




