import axios, { AxiosResponse } from'axios';
import * as cheerio from 'cheerio';
import { response } from '../../types/mediafire'
import { Request, Response } from 'express';
import { parsedUrl } from '../../utils/parsedUrl';

const scraper = async(url: string): Promise<response> => {
  const parsedURL = parsedUrl(url)
  if(!parsedURL) return 'invalid url';

  try {
    const { data}: AxiosResponse<string> = await axios.get<string>(url);
    const $: cheerio.CheerioAPI = cheerio.load(data);
    const fileName: string | null = $('.dl-btn-label').text().replace(/ /g, '');
    const fileType: string | null = $('.filetype').text();
    const urlDownload: string | undefined = $('a#downloadButton').attr('href');
    const  fileZize: string | null | string [] = $('.details').text().trim().split(/ +/).splice(2, 1).toString().trim();
    return {
      fileName: fileName,
      fileType: fileType,
      fileZize: fileZize,
      url: urlDownload
    }
  } catch (error) {
    console.error(error);
    return 'server error';
  }
}

export const mediafireController = async(req: Request, res:Response): Promise<Response> => {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ message: 'URL is not defined' });

  try {
    const md = await scraper(url);
    if (md === 'invalid url') return res.status(400).json({ message: 'Invalid URL' });
    if (md === 'server error') return res.status(500).json({ message: 'Internal server error' });
    return res.status(200).json(md);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
