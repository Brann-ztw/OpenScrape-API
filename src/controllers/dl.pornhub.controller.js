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
exports.controller = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
const download = async (url) => {
    const { data: downloader } = await axios_1.default.post(this.downloadUrl, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: { video_url: url }
    });
    const { data: html } = await axios_1.default.get(url);
    const $ = cheerio.load(downloader);
    const $$ = cheerio.load(html);
    let result = [];
    $('div[class="form-group mb-4"]').each((i, e) => {
        result.push({
            title: $$('div[class="title-container translate"] h1[class="title translate"]').find('span').text().trim(),
            data: $$('div[class="video-actions-menu"]').find('div[class="videoInfo"]').text().trim(),
            views: $$('div[class="video-actions-menu"]').find('div[class="views"]').find('span').text().trim(),
            raiting: $$('div[class="video-actions-menu"]').find('div[class="ratingPercent"]').find('span').text().trim(),
            likes: $$('div[class="votes-fav-wrap"]').find('span[class="votesUp"]').text().trim(),
            dislikes: $$('div[class="votes-fav-wrap"]').find('span[class="votesDown"]').text().trim(),
            favorites: $$('div[class="votes-fav-wrap"]').find('span[class="favoritesCounter"]').text().trim(),
            author: {
                name: $$('div[class="userInfo"]').find('div[class="usernameWrap clearfix"]').text().trim()
            },
            url: this.downloadUrl + $(e).find('a[class="btn btn-secondary mb-4"]').attr('href'),
            quality: $(e).find('a').eq(0).text().trim()
        });
    });
    return result;
};
const controller = async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res.status(400).json({
            status: 400,
            message: `[!] URL is missing`
        });
    try {
        const data = await download(url);
        return res.status(200).json({
            status: 200,
            message: 'Process completed successfully',
            result: data
        });
    }
    catch (e) {
        return res.status(500).json({
            status: 500,
            message: 'An error occurred during the process',
            error: e.message,
        });
    }
};
exports.controller = controller;
