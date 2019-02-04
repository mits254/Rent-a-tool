let express = require('express');
let router = express.Router();
let knex = require('../knex');


router.get('/products', function (req, res, next) {
    knex('products')
        .orderBy('id')
        .then((items) => {
            // console.log(items)
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

router.get('/products/:user_id', function (req, res, next) {
    console.log(req.params)
    knex('products')
        .where('user_id',req.params.user_id)
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

router.post('/products/add',function(req, res, next){
    knex('products')
    .insert({
        name : req.body.name,
        description : req.body.description,
        location: req.body.location,
        type: req.body.type,
        price: req.body.price,
        user_id: req.body.user_id,
        image: req.body.image || 'https://source.unsplash.com/T7MS6msFRwg/600x400'
    },'*')
    .then(product => {
        res.status(201).json({product});
    })
    .catch(err => console.log(err));
})





module.exports = router;
