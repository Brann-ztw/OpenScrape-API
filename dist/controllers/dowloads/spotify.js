"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spotifyController = void 0;
const axios_1 = __importDefault(require("axios"));
const parsedUrl_1 = require("../../utils/parsedUrl");
const scraper = async (url) => {
    const parsedURL = (0, parsedUrl_1.parsedUrl)(url);
    if (!parsedURL)
        return 'invalid url';
    try {
        const { data } = await axios_1.default.get('https://spotifydownloaders.com/api/getSpotifyDetails?url=https://open.spotify.com/track/4KFG5ciFzeBOh2Hlzfwbwa?si=d7MDbEpgT-aFKy0Q73dMVQ');
        return {
            tile: data.preview.title,
            artist: data.preview.artist,
            image: data.preview.image,
            audio: data.preview.audio
        };
    }
    catch (error) {
        return 'server error';
    }
};
const spotifyController = async (req, res) => {
    const url = req.query.url;
    if (!url)
        return res.status(400).json({ message: 'URL is not defined' });
    try {
        const spotify = await scraper(url);
        if (spotify === 'invalid url')
            return res.status(400).json({ message: 'Invalid URL' });
        if (spotify === 'server error')
            return res.status(500).json({ message: 'Internal server error' });
        return res.status(200).json(spotify);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.spotifyController = spotifyController;
