//made for development mode ---- but can be used in production as well
const puppeteer = require('puppeteer');

module.exports.get = async () => {
    //return puppetter browser for scraping
    return puppeteer.launch({
        args: [
            "--disable-setuid-sandbox",
            "--no-sandbox",
            "--single-process",
            "--no-zygote",
        ],
        defaultViewport: null,
        headless: true
    });
}