"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadIgController = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
let response;
const downloadIg = async (URL) => {
    const url = /^(https?:\/\/)?(www\.)?instagram\.com\/.*$/.test(URL);
    if (!url)
        return 'invalid url';
    try {
        const { data } = await axios_1.default.post('https://v3.igdownloader.app/api/ajaxSearch', `recaptchaToken=&q=${URL}&t=media&lang=es`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
                'Accept-Language': 'es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        const $ = cheerio.load(data.data);
        const img = $('img').attr('src');
        const link = $('a').attr('href');
        response = {
            thumbnail: img,
            url: link
        };
    }
    catch (error) {
        console.error(error);
        response = 'server error';
    }
    finally {
        return response;
    }
};
const downloadIgController = async (req, res) => {
    if (!req.query.url) {
        const ResponseJson = {
            status: 'ok',
            msg: 'url is not defined'
        };
        return res.status(200).json(ResponseJson);
    }
    const url = req.query.url;
    try {
        const ig = await downloadIg(url);
        const ResponseJson = {
            status: 'ok',
            data: ig
        };
        return res.status(200).json(ResponseJson);
    }
    catch (error) {
        const ResponseJson = {
            status: 500,
            data: 'server error'
        };
        return res.status(500).json(ResponseJson);
    }
};
exports.downloadIgController = downloadIgController;
