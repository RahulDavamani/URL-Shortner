const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config')

const Url = require('../models/url')

router.get('/', (req, res) => {
   res.render('home.ejs')
})

module.exports = router;