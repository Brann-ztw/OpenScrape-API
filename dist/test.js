"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const scraper = async (url) => {
    try {
        const { data } = await axios_1.default.post('https://savetik.co/api/ajaxSearch', null, {
            params: {
                q: url,
                lang: 'es'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
            }
        });
        console.log(data);
    }
    catch (error) {
        return 'server error';
    }
};
scraper('https://www.tiktok.com/@jennifer_aplicano.09/video/7397954248761150763?is_from_webapp=1&sender_device=pc');
