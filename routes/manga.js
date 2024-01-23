const express = require('express')
const router = express.Router()
const details = require('../controller/details')
const clists = require('../controller/chaplist')

//pass name:slug to controller/details and send the returned data in JSON
router.get('/:name', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let detail = await details(req.params['name'].toLowerCase());
  res.send(JSON.stringify(detail, null, 2));
})

//pass name:slug to controller/chaplist and send the returned data in JSON
router.get('/chaplist/:name', async(req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let clist = await clists(req.params['name'].toLowerCase());
  res.send(JSON.stringify(clist, null, 2));
})

module.exports = router;