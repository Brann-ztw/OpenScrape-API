"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.youtubeControll = void 0;
const axios_1 = __importDefault(require("axios"));
const parsedUrl_1 = require("../../utils/parsedUrl");
const scraper = async (url) => {
    const parsedURL = (0, parsedUrl_1.parsedUrl)(url);
    if (!parsedURL)
        return 'invalid url';
    try {
        const { data } = await axios_1.default.post('https://www.ytfreedownloader.com/yt1/wp-json/aio-dl/video-data/', `url=${url}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
                'Accept-Language': 'es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3',
                'content-type': 'application/x-www-form-urlencoded'
            }
        });
        return {
            url: data.url,
            title: data.title,
            thumbnail: data.thumbnail,
            media: [
                {
                    url: data.medias[19].url,
                    quality: data.medias[19].quality,
                    extension: data.medias[19].extension,
                    formattedSize: data.medias[19].formattedSize
                },
                {
                    url: data.medias[9].url,
                    quality: data.medias[9].quality,
                    extension: data.medias[9].extension,
                    formattedSize: data.medias[9].formattedSize
                },
                {
                    url: data.medias[7].url,
                    quality: data.medias[7].quality,
                    extension: data.medias[7].extension,
                    formattedSize: data.medias[7].formattedSize
                },
                {
                    url: data.medias[2].url,
                    quality: data.medias[2].quality,
                    extension: data.medias[2].extension,
                    formattedSize: data.medias[2].formattedSize
                }
            ]
        };
    }
    catch (error) {
        console.error(error);
        return 'server error';
    }
};
const youtubeControll = async (req, res) => {
    const url = req.query.url;
    if (!url)
        return res.status(400).json({ message: 'URL is not defined' });
    try {
        const yt = await scraper(url);
        if (yt === 'invalid url')
            return res.status(400).json({ message: 'Invalid URL' });
        if (yt === 'server error')
            return res.status(500).json({ message: 'Internal server error' });
        return res.status(200).json(yt);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.youtubeControll = youtubeControll;
