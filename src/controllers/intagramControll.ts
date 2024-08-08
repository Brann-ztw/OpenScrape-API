import axios from 'axios';
import * as cheerio from 'cheerio';
import { Request, Response } from 'express';
import { response, AxiosRespon, ResponseEndpoint, ReturnScrpaer } from '../types/instagram';

let response: response;

const downloadIg = async(URL: string): Promise<response> => {
  const url = /^(https?:\/\/)?(www\.)?instagram\.com\/.*$/.test(URL); 
  if(!url) return 'invalid url';
  try {
    const { data } = await axios.post('https://v3.igdownloader.app/api/ajaxSearch', `recaptchaToken=&q=${URL}&t=media&lang=es`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
        'Accept-Language': 'es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }) as AxiosRespon;
    const $: cheerio.CheerioAPI = cheerio.load(data.data);
    const img: string | undefined = $('img').attr('src');
    const link:  string | undefined = $('a').attr('href');

    response = {
      thumbnail: img,
      url: link
    }
  } catch (error) {
    console.error(error);
    response = 'server error';
  } finally {
    return response
  }
};

export const downloadIgController = async(req: Request, res:Response): Promise<Response> => {
  if(!req.query.url) {
    const ResponseJson: ResponseEndpoint = {
      status: 'ok',
      msg: 'url is not defined'
    }
    return res.status(200).json(ResponseJson);
  }
  const url = req.query.url as string;
  try {
    const ig: response = await downloadIg(url);
    const ResponseJson: ResponseEndpoint = {
      status: 'ok',
      data: ig
    }
    return res.status(200).json(ResponseJson);
  } catch (error) {
    const ResponseJson: ResponseEndpoint = {
      status: 500,
      data: 'server error'
    }
    return res.status(500).json(ResponseJson);
  }
}

