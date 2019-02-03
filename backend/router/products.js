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

router.post('/products/add',function(req, res, next){
    knex('products')
    .insert({
        name : req.body.name,
        description : req.body.description,
        location: req.body.location,
        type: req.body.type,
        price: req.body.price,
        image: req.body.image
    },'*')
    .then(product => {
        res.status(201).json({product});
    })
    .catch(err => console.log(err));
})





module.exports = router;
