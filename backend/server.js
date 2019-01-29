const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");
//const User = require("./model/user");
var cors = require('cors');
const user = require('./router/user');
const product = require('./router/products');
const app = express();

app.use(cors());
app.use(morgan("short"));
app.use(bodyParser.json());
app.use(express.static("public"));
app.disable("x-powered-by");
app.use(user);
app.use(product);
app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.post("/signup", User.signup);
// app.post("/signin", User.signin);

app.listen(PORT, () => {
    console.log(`Its me, the port ${PORT}`); // eslint-disable-line
});
