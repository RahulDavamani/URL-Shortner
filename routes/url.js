const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config')

const Url = require('../models/url')

router.post('/', async (req, res) => {
   var { longURL } = req.body;
   var baseURL = config.get('baseURL')
   var urlCode = shortid.generate();

   if (validUrl.isUri(longURL)) {
      var url = await Url.findOne({longURL})
      if (url) {
         res.send(`Your Short URL: ${url.shortURL}`);
      }else{
         var shortURL = baseURL + '/' + urlCode
         url = new Url({
            longURL,
            shortURL,
            urlCode,
            date: new Date()
         })

         await url.save()
         res.send(`Your Short URL: ${url.shortURL}`);
      }
   }else{
      return res.status(401).send('Invalid URL')
   }
})

router.get('/:urlCode', async (req, res) => {
   var { urlCode } = req.params
   var url = await Url.findOne({ urlCode })
   if (url) {
      res.redirect(url.longURL)
   }else{
      res.send('Url Not Found')
   }
})

module.exports = router;