"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const scraper = async (url) => {
    try {
        const { data } = await axios_1.default.get('https://spotifydownloaders.com/api/getSpotifyDetails?url=https://open.spotify.com/track/4KFG5ciFzeBOh2Hlzfwbwa?si=d7MDbEpgT-aFKy0Q73dMVQ');
        console.log(data);
    }
    catch (error) {
        return 'server error';
    }
};
scraper('');
