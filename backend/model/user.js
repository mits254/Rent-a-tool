const environment = process.env.NODE_ENV || "development";
const configuration = require("../knexfile")[environment];
const database = require("knex")(configuration);
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const knex = require('../knex');

const signup = (req, res) => {
  const user = req.body;
  hashPassword(user.password)
    .then(hashedPassword => {
      delete user.password;
      user.password_digest = hashedPassword;
    })
    .then(() => createToken())
    .then(token => (user.token = token))
    .then(() => createUser(user))
    .then(user => {
      delete user.password_digest;
      res.status(201).json({ user });
    })
    .catch(err => console.error(err)); //eslint-disable-line
};

const hashPassword = password => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash);
    })
  );
};

const createUser = user => {
  return knex('users')
    .insert({
      username: user.username,
      password: user.password_digest,
      token: user.token,
      address: user.address,
      city: user.city,
      state: user.state,
      phone: user.phone
    }, '*')
};

const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString("base64"));
    });
  });
};

const signin = (req, res) => {
  const userReq = req.body;
  let user;
  
  findUser(userReq)
    .then(foundUser => {
      user = foundUser;
      if(!user){
       res.sendStatus(205);
       return;
      }
      bcrypt.compare(userReq.password, foundUser.password, function(err, result) {
        if(result){
          return res.json(user);
        } else {
          return res.sendStatus(210);
        }
      });
    })
    // .then(res => createToken()) //eslint-disable-line
    // .then(token => updateUserToken(token, user))
    // .then(() => {
    //   delete user.password_digest;
    //   return res.json(user);
    //   //alert('you are in')
    // })
    .catch(err => {res.send(500)}) //eslint-disable-line
};

const findUser = userReq => {
  return database
    .raw("SELECT * FROM users WHERE username = ?", [userReq.username])
    .then(data => data.rows[0]);
};

// const checkPassword = (reqPassword, foundUser) => {
//     bcrypt.compare(reqPassword, foundUser.password, function(err, res) {
//       if(res)
//         res.sendStatus('200');
//       else
//         res.sendStatus('500')
//     });
// };

// const updateUserToken = (token, user) => {
//   return database
//     .raw(
//       "UPDATE users SET token = ? WHERE id = ? RETURNING id, username, token",
//       [token, user.id]
//     )
//     .then(data => data.rows[0]);
// };

const authenticate = userReq => {
  findByToken(userReq.token).then(user => {
    if (user.username === userReq.username) {
      return true;
    } else {
      return false;
    }
  });
};

const findByToken = token => {
  return database
    .raw("SELECT * FROM users WHERE token = ?", [token])
    .then(data => data.rows[0]);
};

module.exports = { signup, signin, authenticate };