let express = require('express');
let router = express.Router();
let knex = require('../knex');


router.get('/products', function (req, res, next) {
    console.log('hello')
    knex('products')
        .orderBy('id')
        .then((items) => {
            console.log(items)
            res.send(items)

            //   res.render({items});
            //res.send(items);
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error',
                data: err
            });
        });
});




module.exports = router;
