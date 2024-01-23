//Server Configuration and endpoint mapping
const express = require("express");
const app = express();
const port = process.env.PORT || 7253;
const mroutes = require('./routes/manga');
const croutes = require('./routes/chapter');

app.use('/manga', mroutes);
app.use('/manga/chapter', croutes);

app.get('/', (req, res) => { res.redirect('https://github.com/sololinux/mangpi'); });
app.get('*', (req, res) => { res.send([{ "code": "403", "error": "Endpoint cannot be accessed !!" }]); });

app.listen(port, () => {
    console.log(`API served in port ${port}`);
});