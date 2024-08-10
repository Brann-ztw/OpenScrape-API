"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerNpmj = void 0;
const express_1 = require("express");
const npmj_1 = require("../../controllers/search/npmj");
exports.routerNpmj = (0, express_1.Router)();
exports.routerNpmj.get('/', npmj_1.npmjsController);
