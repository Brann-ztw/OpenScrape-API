import axios from 'axios';
import * as cheerio from 'cheerio';
import { Request, Response } from 'express';
import { parsedUrl } from '../../utils/parsedUrl';

const scraper = async(url: string): Promise<string | string[]> => {
  const parsedURL = parsedUrl(url)
  if(!parsedURL) return 'invalid url';
  
  try {
    const { data } = await axios.post('https://savetik.co/api/ajaxSearch', null, {
      params: {
        q: url,
        lang: 'es'
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
      }
    })
    const $: cheerio.CheerioAPI = cheerio.load(data.data);
    const links: string [] = [];

    $('a').each((index, element) => {
      const link: string | undefined = $(element).attr('href');
      if(link !== undefined){
        links.push(link);
      }
    });

    return links;
  } catch (error) {
    console.error(error);
    return 'server error';
  }
};

export const tiktokController = async(req: Request, res:Response): Promise<Response> => {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ message: 'URL is not defined' });

  try {
    const tikTok: string | string[] = await scraper(url);
    if (tikTok === 'invalid url') return res.status(400).json({ message: 'Invalid URL' });
    if (tikTok === 'server error') return res.status(500).json({ message: 'Internal server error' });
    return res.status(200).json({url: tikTok[2]});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}




