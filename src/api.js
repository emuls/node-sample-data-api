var ds = require('./datastore');

var exports = module.exports = {};

exports.retrieveData = function(req, res){
    var key = req.params.key;
    var result;

    if(key) {
        console.log('Returning data for: ' + key);
        result = ds.data[key];
    }else{
        console.log('Returning data');
        result = ds.data;
    }

    if (result) {
        res.header('type', 'text/json');
        res.send(JSON.stringify(result));
    } else {
        res.status(404);
        res.send('No data found for key: ' + key);
    }
}

exports.putData = function(req, res){
    var key = req.param.key;
    if(!req/body){
        console.log('Invalid data');
        res.status(400).send('Invalid data');
        return;
    }else if(key){
        console.log('Data Stored at ' + key);
        ds.data[key]=req.body;
    }else {
        console.log('Data Stored');
        ds.data = data;
    }
    res.send('Data Stored');
}