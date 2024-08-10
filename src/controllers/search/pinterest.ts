import { Request, Response } from "express"
import axios from "axios"
import { Pin } from "../../types/pinterest";

const scraper = async (text: string): Promise<string> => {
  try {
    const getRandom: number = Math.floor(Math.random() * 10);
    const { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
    const pinData = data.resource_response.data.results[getRandom] as Pin;
    const url: string = pinData.images.orig.url;
    return url
  } catch (error) {
    console.error(error);
    return 'server error';
  }
};

export const pinterestController = async(req: Request, res:Response): Promise<Response> => {
  const search = req.query.search as string;
  if (!search) return res.status(400).json({ message: 'Search is not defined' });

  try {
    const pin: string = await scraper(search);
    if (pin === 'server error') return res.status(500).json({ message: 'Internal server error' });
    return res.status(200).json({url: pin});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}