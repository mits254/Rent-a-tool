const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../knex');

// router.get('/users', (req, res, next) => {
//     knex('users')
//         .orderBy('id')
//         .then((user) => {
//             if (!user) {
//                 return "This user doesn't exist";
//             }
//             res.send(user);
           
//         })
//         .catch((err) => {
//             res.status(500).json({
//                 status: 'error',
//                 data: err
//             });
//         })
// });



router.delete('/users/delete/:fullname', (req, res, next) => {
    console.log(req.body);

    bcrypt.hash(req.body.password, 12)
        .then((hashed_password) => {
            knex('user_detail')

        })
        .then((users) => {
            const user = users[0];
            delete user.hashed_password;
            res.send(user);
        })
        .catch((err) => {
            next(err);
        });
});


module.exports = router;