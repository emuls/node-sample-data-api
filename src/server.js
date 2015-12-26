var ds = require('./datastore');
var api = require('./api');
var express = require('express');
var bodyParser = require('body-parser');

var dataFile = process.argv[2];
if(!dataFile){
    dataFile = 'sample-data.json';
}
ds.init(dataFile);

var app = express();
app.use('/', express.static('www'));
app.use(bodyParser.json());
app.get('/api/data/:key', (req, res) => api.retrieveData(req, res));
app.get('/api/data', (req, res) => api.retrieveData(req, res));
app.post('/api/data/:key', (req, res) => api.putData(req, res));
app.post('/api/data', (req, res) => api.putData(req, res));

app.put('/set-data', function(req, res) {
    console.log(req.body);      // your JSON
    response.send(req.body);    // echo the result back
})

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Sample Data Server initialized with "' + dataFile + '" listening at http://%s:%s', host, port);
});
