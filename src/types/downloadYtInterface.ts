import { AxiosResponse } from "axios"

export interface ReturnScraper {
  url: string,
  title: string,
  thumbnail: string,
  media: Media[]
}

interface Media {
  url: string,
  quality: string,
  extension: string
  formattedSize: string
}
export type ReturnPromise = Promise<string | ReturnScraper>;
export type DataReponse = string | ReturnScraper;
export type ResponseType =  ReturnScraper | string;
export type ReturnAxios = AxiosResponse<Data>;

interface Data {
  url: string,
  title: string,
  thumbnail: string,
  duration: string,
  source: string,
  medias: Medias[]
}

interface Medias {
  url: string,
  quality: string,
  extension: string,
  size: string,
  formattedSize: string,
  videoAvailable: boolean,
  audioAvailable: boolean,
  chunked: boolean,
  cached: boolean,
  requiresRendering: boolean

}

type status = 'ok' | 500;

export interface ResponseEndpoint {
  status: status,
  data?: DataReponse | unknown
  msg?: string
}
  