const scrap = require('../scraper/index');
const qns = {
    text: ['.space-y-2 > h3 a', 'main > div:nth-child(1) > div > div.comic-detail > h6 > a > span', 'main > div:nth-child(1) > div > div.overflow-hidden > div:nth-child(2) > div > div > div > div.space-x-2 > div.whitespace-nowrap > time > span'],
    all: {
        sr: ['main > div:nth-child(2) > div > div > div > div > img'],
    }
}

function pag(a) { let d = []; a.forEach((el, i) => { d.push({ "number": i, "img": el }); }); return d; }

//Get required name:slug and chapter:slug from routes
module.exports = (name, ch) => {
    //Pass the name:slug, chapter:slug and data selector for scraping ie. qns ={} to scraper/index
    //return the data got from scraper based on error code by arranging in json format
    return new Promise(async (resolve) => {
        let data = await scrap(name, ch, qns);
        if (data.status == '200') { resolve([{ "code": "200" }, { "data": { "name": data.text[0], "chapter": data.text[1], "release": data.text[2], "pages": pag(data.all.sr) } }, { "docs": "https://github.com/sololinux/mangpi" }]) }
        if (data.status == '404') { resolve([{ "code": "404", "error": "The requested manga/data was not found !!" }, { "docs": "https://github.com/sololinux/mangpi" }]) }
        if (data.status == '502') { resolve([{ "code": "502", "error": "Bad Gateway: Website used for scraping is not responding !!" }, { "docs": "https://github.com/sololinux/mangpi" }]) }
    })
}