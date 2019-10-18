const express = require('express'),
    router = express.Router(),
    catsModel = require('../Models/catsModel');

router.get('/', async function(req, res, next) {
    const catsData = await catsModel.getAll();
    console.log('my cats data', catsData);

    res.render('template', {
        locals: {
            title: 'My Cats',
            data: catsData
        },
        partials: {
            partial: 'partial-cats'
        }
    });
});

module.exports = router;
