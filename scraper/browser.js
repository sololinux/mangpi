//only for PROUCTION use -----> won't work on development/local use
const chromium = require('@sparticuz/chromium-min'); 
const puppeteer = require('puppeteer-core');

module.exports.get = async () => {
    //return puppetter browser for scraping
    return puppeteer.launch({
        args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(
            `https://github.com/Sparticuz/chromium/releases/download/v119.0.2/chromium-v119.0.2-pack.tar`
        ),
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
    });
}