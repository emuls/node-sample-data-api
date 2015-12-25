var ds = require('./datastore');

var exports = module.exports = {};

exports.retrieveData = function(req, res){
    var key = req.params.key;
    var result;

    if(key) {
        console.log('Returning data for: ' + key);
        result = ds.data[key];
    }else{
        console.log('Returning data: ' + key);
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