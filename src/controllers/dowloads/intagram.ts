import axios from 'axios';
import * as cheerio from 'cheerio';
import { Request, Response } from 'express';
import { response, axiosResponse } from '../../types/instagram';
import { parsedUrl } from '../../utils/parsedUrl';

const scraper = async(url: string): Promise<response> => {
  const parsedURL = parsedUrl(url)
  if(!parsedURL) return 'invalid url';
  
  try {
    const { data } = await axios.post('https://v3.igdownloader.app/api/ajaxSearch', `recaptchaToken=&q=${url}&t=media&lang=es`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
        'Accept-Language': 'es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }) as axiosResponse;
    const $: cheerio.CheerioAPI = cheerio.load(data.data);
    const img: string | undefined = $('img').attr('src');
    const link:  string | undefined = $('a').attr('href');

    return {
      thumbnail: img,
      url: link
    }
  } catch (error) {
    console.error(error);
    return 'server error';
  }
};

export const instagramController = async(req: Request, res:Response): Promise<Response> => {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ message: 'URL is not defined' });

  try {
    const ig = await scraper(url);
    if (ig === 'invalid url') return res.status(400).json({ message: 'Invalid URL' });
    if (ig === 'server error') return res.status(500).json({ message: 'Internal server error' });
    return res.status(200).json(ig);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}




