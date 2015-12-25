var fs = require('fs');

var exports = module.exports = {};

exports.data = {}

exports.init = function(dataFile){
    var self = this;
    fs.readFile(dataFile, 'utf8', function(err, fileData) {
        if (err){
            console.log("Error loading data: " + err);
            console.log("Setting data to empty map");
            self.data = {};
        }else {
            console.log('Read Data File: ' + dataFile);
            self.data = JSON.parse(fileData);
        }
    });
}

