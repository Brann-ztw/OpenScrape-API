"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerInstagram = void 0;
const express_1 = require("express");
const intagram_1 = require("../../controllers/dowloads/intagram");
exports.routerInstagram = (0, express_1.Router)();
exports.routerInstagram.get('/', intagram_1.instagramController);
