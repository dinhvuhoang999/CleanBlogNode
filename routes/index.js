const express = require('express');
var router = express.Router()

router.get('./contact',() => {
    res.send('contact');
});

router.get('./about',() => {
    res.send('about');
});

router.get('./post',() => {
    res.send('post');
});

module.exports = express;