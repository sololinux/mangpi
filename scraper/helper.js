//Get the source page and data selector ie. qns={}
//evaluate the page for data based on data selector
//append all the data selector's data in object and return

module.exports = async (p, q) =>{
    return await p.evaluate((q) => {
        data = {};
        if (q.text) {
            let t = [];
            q.text.forEach(el => {
                let d = document.querySelector(el).textContent;
                t.push(d);
            });
            data['text'] = t;
        }
        if (q.src) {
            let t = [];
            q.src.forEach(el => {
                let d = document.querySelector(el).getAttribute('src');
                t.push(d);
            });
            data['src'] = t;
        }
        if (q.all) {
            let ob = {};
            if (q.all.txt) {
                q.all.txt.forEach(el => {
                    d1 = [...document.querySelectorAll(el)].map(elem => elem.innerText);
                });
                ob['txt'] = d1;
            }
            if (q.all.sr) {
                q.all.sr.forEach(el => {
                    d2 = [...document.querySelectorAll(el)].map(e => e.getAttribute('src'));
                });
                ob['sr'] = d2;
            }
            if (q.all.lat) {
                let t = [];
                q.all.lat.forEach(el => {
                    let d = document.querySelector(el).lastElementChild.firstChild.textContent;
                    let d1 = document.querySelector(el).lastElementChild.lastChild.lastChild.textContent;
                    t.push(d);
                    t.push(d1);
                });
                ob['lat'] = t;
            }
            data['all'] = ob;
        }
        return data;
    }, q)
}