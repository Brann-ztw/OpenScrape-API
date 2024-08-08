import { AxiosResponse } from "axios";
import { AnyNode } from "cheerio";

export interface ReturnScrpaer {
  thumbnail: string | undefined,
  url: string | undefined
}

interface Data {
  status: string,
  p: string,
  v: string,
  data: AnyNode
}

export interface ResponseEndpoint{
  status: status,
  msg?: string,
  data?: response
}
type status = 'ok' | 500
export type response = string | ReturnScrpaer;
export type AxiosRespon = AxiosResponse<Data>;