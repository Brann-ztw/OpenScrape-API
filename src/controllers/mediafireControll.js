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
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
let response;
const scraper = async (URL) => {
    const url = /^(https?:\/\/)?(www\.)?mediafire\.com\/.*$/.test(URL);
    if (!url)
        return 'invalid url';
    try {
        const { data: html } = await axios_1.default.get(URL);
        const $ = cheerio.load(html);
        const fileName = $('.dl-btn-label').text().replace(/ /g, '');
        const fileType = $('.filetype').text();
        const urlDownload = $('a#downloadButton').attr('href');
        const fileZize = $('.details').text().trim().split(/ +/).splice(2, 1).toString().trim();
        response = {
            fileName: fileName,
            fileType: fileType,
            fileZize: fileZize,
            url: urlDownload
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
