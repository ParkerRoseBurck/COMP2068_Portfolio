'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

//Get ABOUT ME page
router.get('/about', function (req, res) {
    res.render('about', { title: 'About Me' });
});
//Get PROJECTS page
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
});
//Get SERVICES page
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});
//Get CONTACT page
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

module.exports = router;
