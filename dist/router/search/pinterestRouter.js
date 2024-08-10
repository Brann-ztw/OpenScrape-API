"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerPinterest = void 0;
const express_1 = require("express");
const pinterest_1 = require("../../controllers/search/pinterest");
exports.routerPinterest = (0, express_1.Router)();
exports.routerPinterest.get('/', pinterest_1.pinterestController);
