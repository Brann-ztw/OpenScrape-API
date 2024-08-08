"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerDownloadInstagram = void 0;
const express_1 = require("express");
const intagramControll_1 = require("../controllers/intagramControll");
exports.routerDownloadInstagram = (0, express_1.Router)();
exports.routerDownloadInstagram.get('/', intagramControll_1.downloadIgController);
