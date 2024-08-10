"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTikTok = void 0;
const express_1 = require("express");
const tiktok_1 = require("../../controllers/dowloads/tiktok");
exports.routerTikTok = (0, express_1.Router)();
exports.routerTikTok.get('/', tiktok_1.tiktokController);
