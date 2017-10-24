var express = require('express');
var router = express.Router();
const Campaign = require('../models/campaign');

// routes/index.js
router.get('/', (req, res, next) => {
  Campaign
  .find({})
  .populate('_creator')
  .exec((err, campaigns) => {
    res.render('index', { campaigns });
  });

});

module.exports = router;
