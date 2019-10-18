const express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('partial-index', {
        locals: {
            title: 'Welcome!'
        },
        partials: {
            partial: 'partial-index'
        }
    });
});

module.exports = router;
