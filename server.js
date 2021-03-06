var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');


// middleware

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

// app

app.get('/', function (req, res) {
    res.send('To login into app go to localhost:3000/login');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/first-template', function(req, res) {
    res.render('first-template');
});

app.get('/login', function(req, res) {
    res.render('login-template');
});

app.get('/home', function(req, res) {
    const response = {
        firstName: req.query.firstName,
        lastName: req.query.lastName
    };

    res.end(JSON.stringify(response));
});

app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('Strona nie istnieje');
});
