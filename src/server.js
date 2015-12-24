var data = {};

var express = require('express');
var app = express();

app.use('/', express.static('www'));

app.get('/hello', function (req, res) {
    res.send('Hello!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Sample Data Server listening at http://%s:%s', host, port);
});
