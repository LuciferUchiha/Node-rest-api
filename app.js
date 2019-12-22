var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs')
var app = express();

const port = 3003

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure logger
app.use(logger('common', {
    stream: fs.createWriteStream('./access.log', { flags: 'a' })
}));
app.use(logger('dev'));

app.get("/", (req, res) => {
    res.send("Welcome to root!")
})

const UserRouter = require('./routes/user.js')

app.use(UserRouter)

app.listen(port, () => {
    console.log('Server running on port ' + port);
})