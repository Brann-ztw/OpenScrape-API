import { json, Request, Response } from "express"
import axios, { AxiosResponse } from "axios"
import * as cheerio from "cheerio";

const scraper = async (text: string, limit: string): Promise<string | string[]> => {
  try {
    const { data: htmlMain } = await axios.get('https://www.npmjs.com/search?q=chalk', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:129.0) Gecko/20100101 Firefox/129.0',
        'Accept-Language':' es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3',
        'x-spiferack': 1,
      }
    }) as AxiosResponse<any, any>;

    if(limit < htmlMain.total) {
      return htmlMain.objects.splice(0, limit);
    }
    return `There are no results for that limit`
  } catch (error) {
    console.error(error);
    return 'server error';
  }
};

export const npmjsController = async(req: Request, res:Response): Promise<Response> => {
  const search = req.query.search as string;
  const limit = req.query.limit as string;
  if (!search || !limit) return res.status(400).json({ message: 'Search or Limit is not defined' });

  try {
    const npmjs: string | string[] = await scraper(search, limit);
    if (npmjs === 'There are no results for that limit') return res.status(400).json({ message: 'There are no results for that limit' });
    if (npmjs === 'server error') return res.status(500).json({ message: 'Internal server error' });
    return res.status(200).json(npmjs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

