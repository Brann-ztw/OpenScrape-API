"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerYoutube = void 0;
const express_1 = require("express");
const youtube_1 = require("../../controllers/dowloads/youtube");
exports.routerYoutube = (0, express_1.Router)();
exports.routerYoutube.get('/', youtube_1.youtubeControll);
