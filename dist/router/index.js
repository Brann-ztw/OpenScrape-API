"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const yotubeRouter_1 = require("./downloader/yotubeRouter");
const intagramRouter_1 = require("./downloader/intagramRouter");
const mediafireControll_1 = require("./downloader/mediafireControll");
const spotify_1 = require("./downloader/spotify");
const path_1 = __importDefault(require("path"));
exports.app = (0, express_1.default)();
exports.app.use('/api/download/youtube', yotubeRouter_1.routerYoutube);
exports.app.use('/api/download/instagram', intagramRouter_1.routerInstagram);
exports.app.use('/api/download/mediafire', mediafireControll_1.routerMediafire);
exports.app.use('/api/download/spotify', spotify_1.routerSpotify);
exports.app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
exports.app.get('/', (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, '..', '..', 'src','public', 'main', 'index.html'));
});
exports.app.get('/downloads', (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, '..', '..', 'src', 'public', 'downloads', 'index.html'));
});
