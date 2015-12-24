var data = {
    "dogs" : [
        "Labrador",
        "Golden Retriever",
        "Malteze"
    ]
};

var express = require('express');
var app = express();

app.use('/', express.static('www'));

app.get('/data', function (req, res) {
    res.header('type', 'text/json')
    res.send(JSON.stringify(data));
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Sample Data Server listening at http://%s:%s', host, port);
});
