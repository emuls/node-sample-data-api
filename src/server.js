var fs = require('fs');
var express = require('express');

var dataFile = process.argv[2];
var data;

if(!dataFile){
    dataFile = 'sample-data.json';
}

fs.readFile(dataFile, 'utf8', function(err, fileData) {
    if (err){
        console.log("Error loading data: " + err);
        console.log("Setting data to empty map");
        data = {};
    }else {
        console.log('Read Data File: ' + dataFile);
        data = JSON.parse(fileData);
    }
});

var app = express();

app.use('/', express.static('www'));

app.get('/api/data', function (req, res) {
    res.header('type', 'text/json')
    res.send(JSON.stringify(data));
});

app.put('/set-data', function(req, res) {
    console.log(req.body);      // your JSON
    response.send(req.body);    // echo the result back
})

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Sample Data Server initialized with "' + dataFile + '" listening at http://%s:%s', host, port);
});
