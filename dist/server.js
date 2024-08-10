"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
const config_1 = require("./config");
const PORT = config_1.config.port;
router_1.app.listen(PORT, () => console.log(`server listen on port ${PORT}`));
