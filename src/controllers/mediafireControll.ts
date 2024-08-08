import axios, { AxiosResponse } from'axios';
import * as cheerio from 'cheerio';
import { response } from '../types/mediafire'

let response: response;

const scraper = async(URL: string): Promise<response> => {
  const url = /^(https?:\/\/)?(www\.)?mediafire\.com\/.*$/.test(URL); 
  if(!url) return 'invalid url';
  try {
    const { data: html }: AxiosResponse<string> = await axios.get<string>(URL);

    const $: cheerio.CheerioAPI = cheerio.load(html);
    const fileName: string | null = $('.dl-btn-label').text().replace(/ /g, '');
    const fileType: string | null = $('.filetype').text();
    const urlDownload: string | undefined = $('a#downloadButton').attr('href');
    const  fileZize: string | null | string [] = $('.details').text().trim().split(/ +/).splice(2, 1).toString().trim();
    response = {
      fileName: fileName,
      fileType: fileType,
      fileZize: fileZize,
      url: urlDownload
    }
  } catch (error) {
    console.error(error);
    response = 'server error';
  } finally {
    return response
  }
}

