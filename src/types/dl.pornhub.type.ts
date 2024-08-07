import { AxiosResponse } from "axios";
import { AnyNode } from "cheerio";

const author: string = '@al-e-dev'

interface Author {
    name: string;
}

export interface Result {
    title: string;
    data: string;
    views: string;
    rating: string;
    likes: string;
    dislikes: string;
    favorites: string;
    author: Author;
    url: string;
    quality: string;
}

export interface ResultData {
    status: number,
    author: author,
    message?: string,
    error?: string,
    result?: Result[]
}

interface AxiosData {
  status: string,
  p: string,
  v: string,
  data: AnyNode
}

export type Axios = AxiosResponse<AxiosData>;
