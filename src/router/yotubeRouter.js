"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerDownloadYoutube = void 0;
const express_1 = require("express");
const youtubeControll_1 = require("../controllers/youtubeControll");
exports.routerDownloadYoutube = (0, express_1.Router)();
exports.routerDownloadYoutube.get('/', youtubeControll_1.downloadYoutubeControll);
