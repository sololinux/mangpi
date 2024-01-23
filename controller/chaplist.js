const scrap = require('../scraper/index');
const qns = {
    text: ['.space-y-2 > h3 a',],
    all: {
        txt: ['main > div:nth-child(5) > div:nth-child(2) > div > div > div.border-b > div.space-x-1'],
        lat: ['main > div:nth-child(5) > div:nth-child(2) > div > div']
    }
}

//Get required name:slug from routes
module.exports = (name) => {
    //Pass the name:slug and data selector for scraping ie. qns ={} to scraper/index
    //return the data got from scraper based on error code by arranging in json format
    return new Promise(async (resolve) => {
        let data = await scrap(name, false, qns);
        if (data.status == '200') { resolve([{ "code": "200" }, { "data": { "name": data.text[0], "lastUpdate": data.all.lat[1], "lastChapter": data.all.lat[0], "chapters": data.all.txt } }, { "docs": "https://github.com/sololinux/mangpi" }]) }
        if (data.status == '404') { resolve([{ "code": "404", "error": "The requested manga/data was not found !!" }, { "docs": "https://github.com/sololinux/mangpi" }]) }
        if (data.status == '502') { resolve([{ "code": "502", "error": "Bad Gateway: Website used for scraping is not responding !!" }, { "docs": "https://github.com/sololinux/mangpi" }]) }
    })
}