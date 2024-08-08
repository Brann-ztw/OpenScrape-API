"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const yotubeRouter_1 = require("./yotubeRouter");
const intagramRouter_1 = require("./intagramRouter");
exports.app = (0, express_1.default)();
exports.app.use('/download/yt', yotubeRouter_1.routerDownloadYoutube);
exports.app.use('/download/ig', intagramRouter_1.routerDownloadInstagram);
