"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsedUrl = void 0;
const parsedUrl = (url) => {
    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname;
        const hosts = ['www.youtube.com', 'www.youtu.be', 'www.instagram.com', 'open.spotify.com'];
        return hosts.includes(hostname) ? true : false;
    }
    catch {
        return false;
    }
};
exports.parsedUrl = parsedUrl;
