import { Request, Response } from "express";
import axios from 'axios';
import { ReturnScraper, ReturnPromise, ReturnAxios, ResponseType, ResponseEndpoint, DataReponse } from "../types/downloadYtInterface";

let response: ResponseType;

const downloadYoutube = async(search: string): ReturnPromise => {
  const URL = /^(https?:\/\/)?(www\.)?youtu\.be\/.*$/.test(search); 
  if(!URL) return 'invalid url';
  try {
    const { data } = await axios.post('https://www.ytfreedownloader.com/yt1/wp-json/aio-dl/video-data/', `url=${search}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
        'Accept-Language': 'es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3',
        'content-type': 'application/x-www-form-urlencoded'
      }
    }) as ReturnAxios;
     response = {
      url: data.url,
      title: data.title, 
      thumbnail: data.thumbnail,
      media: [
        {
          url: data.medias[19].url,
          quality:data.medias[19].quality,
          extension: data.medias[19].extension,
          formattedSize: data.medias[19].formattedSize
        },
        {
          url: data.medias[9].url,
          quality:data.medias[9].quality,
          extension: data.medias[9].extension,
          formattedSize: data.medias[9].formattedSize
        },
        {
          url: data.medias[7].url,
          quality:data.medias[7].quality,
          extension: data.medias[7].extension,
          formattedSize: data.medias[7].formattedSize
        },
        {
          url: data.medias[2].url,
          quality:data.medias[2].quality,
          extension: data.medias[2].extension,
          formattedSize: data.medias[2].formattedSize
        }
      ]
    }
  } catch (error) {
    console.error(error);
    response = 'server error';
  } finally {
    return response
  }
};

export const downloadYoutubeControll = async(req: Request, res: Response) => {
  if(!req.query.url) {
    const ResponseJson: ResponseEndpoint = {
      status: 'ok',
      msg: 'url is not defined'
    }
    return res.status(200).json(ResponseJson);
  }
  const url = req.query.url as string;
  try {
    const yt: DataReponse = await downloadYoutube(url);
    const ResponseJson: ResponseEndpoint = {
      status: 'ok',
      data: yt
    }
    return res.status(200).json(ResponseJson);
  } catch (error) {
    const ResponseJson: ResponseEndpoint = {
      status: 500,
      data: error
    }
    return res.status(500).json(ResponseJson);
  }
};

