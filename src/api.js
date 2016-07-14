var ds = require('./datastore');

var exports = module.exports = {};
var requestCount = 0;

exports.retrieveData = function(req, res) {
	requestCount++;
	var key = req.params.key;
	var cache = req.query.cache;

	console.log('Data Fetched. Count: ' + requestCount + ' Cache: ' + !!cache);

	var result;

	if (key) {
		console.log('Returning data for: ' + key);
		result = ds.data[key];
	} else {
		console.log('Returning data');
		result = ds.data;
	}

	if (result) {
		res.header('type', 'text/json');
		if (cache==='true') {
			res.header("Cache-Control", "public, max-age=300");
		} else {
			res.header("Cache-Control", "public, no-store");
		}
		res.send(JSON.stringify(result));
	} else {
		res.status(404);
		res.send('No data found for key: ' + key);
	}
}

exports.putData = function(req, res) {
	console.log('Putting Data');
	var key = req.param.key;
	if (!req.body) {
		console.log('Invalid data');
		res.status(400).send('Invalid data');
		return;
	} else if (key) {
		console.log('Data Stored at ' + key);
		ds.data[key] = req.body;
	} else {
		console.log('Data Stored');
		ds.data = req.body;
	}
	res.send('Data Stored');
}