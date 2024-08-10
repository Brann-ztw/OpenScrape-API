"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerMediafire = void 0;
const express_1 = require("express");
const mediafire_1 = require("../../controllers/dowloads/mediafire");
exports.routerMediafire = (0, express_1.Router)();
exports.routerMediafire.get('/', mediafire_1.mediafireController);
