import { AxiosResponse } from "axios";


export interface ReturnScraper {
  fileName: string | null,
  fileType: string | null,
  fileZize: string | null | string[],
  url: string | undefined
}


export type response = string | ReturnScraper;