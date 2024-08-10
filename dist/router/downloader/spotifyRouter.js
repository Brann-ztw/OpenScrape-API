"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerSpotify = void 0;
const express_1 = require("express");
const spotify_1 = require("../../controllers/dowloads/spotify");
exports.routerSpotify = (0, express_1.Router)();
exports.routerSpotify.get('/', spotify_1.spotifyController);
