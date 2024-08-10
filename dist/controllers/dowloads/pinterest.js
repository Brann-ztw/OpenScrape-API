"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinterestController = void 0;
const axios_1 = __importDefault(require("axios"));
const scraper = async (text) => {
    try {
        const getRandom = Math.floor(Math.random() * 10);
        const { data } = await axios_1.default.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        const pinData = data.resource_response.data.results[getRandom];
        const url = pinData.images.orig.url;
        return url;
    }
    catch (error) {
        console.error(error);
        return 'server error';
    }
};
const pinterestController = async (req, res) => {
    const search = req.query.search;
    if (!search)
        return res.status(400).json({ message: 'Search is not defined' });
    try {
        const pin = await scraper(search);
        if (pin === 'server error')
            return res.status(500).json({ message: 'Internal server error' });
        return res.status(200).json({ url: pin });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.pinterestController = pinterestController;
