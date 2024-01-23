const express = require('express')
const router = express.Router()
const chapters = require('../controller/chapter')

//pass name:slug and chapter:slug to controller/chapter and send the returned data in JSON
router.get('/:ch/:name', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let chapter = await chapters(req.params['name'].toLowerCase(), req.params['ch']);
  res.send(JSON.stringify(chapter, null, 2));
})

module.exports = router;