//const browser = require('./browser') ------> only for PRODUCTION
const browser = require('./test.browser')
const txt = require('./helper')

//Get required params:slug and qns={data.selectors} from controller
module.exports = (name, ch, q) => {
    return new Promise(async (resolve) => {
        try {
            //get the browser and goto source website
            bro = await browser.get();
            const page = await bro.newPage();
            await page.goto(`https://mangapark.net/search?word=${name.split('_').join('%20')}`, {
                waitUntil: "domcontentloaded",
            });
            const sel = { text: ['div.border-t-base-200 > div:nth-child(1) > div.space-y-1 > h3 > a'] }
            await page.waitForTimeout(1000);
            await page.waitForSelector(sel.text[0]);
            //check if the name:slug matches with data in source website
            const manga = await txt(page, sel);
            if (manga.text[0].toLowerCase() == name.split('_').join(' ')) {
                await page.click(sel.text[0], {
                    waitUntil: "domcontentloaded",
                });
                //Check if parameter contains chapter number
                //if no call helper to evaluate the data selectors and return it
                if (ch == false) {
                    await page.waitForSelector('.w-24 > img');
                    await page.waitForSelector('main > div:nth-child(5) > div:nth-child(2) > div > div > div > div.space-x-1 > a');
                    await page.waitForTimeout(2000);
                    let data = await txt(page, q);
                    data.status = '200';
                    resolve(data);
                }
                //if yes
                else {
                    //check if source website contains the chapter number
                    const xp = `::-p-xpath(//a[contains(text(), '${ch}')])`;
                    const el = await page.waitForSelector(xp, { timeout: 6000 }).catch((e) => { console.log('chError \n' + e); return null });
                    if (el) {
                        //goto chapter's pages
                        //call helper to evaluate the data selectors and return it
                        el.click()
                        await page.waitForSelector('main > div:nth-child(2) > div > div > div');
                        let data = await txt(page, q);
                        data.status = '200';
                        resolve(data);
                    }
                }
            }
            //return error code 404 if manga or data.selector not found in source website
            else {
                console.log('ERR____scraper/index.js/checkError');
                resolve({ status: '404' });
            }
            //return error code 502 if source website is not responding
        } catch (er) {
            console.log('ERR___scraper/index.js/puppeteerError\n' + er);
            resolve({ status: '502' });
        } finally {
            //close the browser
            bro.close();
        }
    })
}