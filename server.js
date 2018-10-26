var express = require('express');
var app = express();


// middleware

app.use('/store', function(req, res, next) {
    console.log('Użytkownik kieruje się na stronę /store');
    next();
});


// app

app.get('/', function(req, res) {
    res.send('Sklep jest na stronie localhost:3000/store');
});

app.get('/store', function(req, res) {
    res.send('To jest sklep');
});

app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('Strona nie istnieje');
});
