var express = require('express');
var app = express();
var PORT = 3000;


var middleWare = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		var date = new Date().toString();
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' at  ' + date);
		next();
	}
};

app.use(middleWare.logger);

app.get('/about',middleWare.requireAuthentication, function (req, res) {
	res.send('About page!');
}); //(rout - the page to navigate, function(requset, response) )

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started on port: ' + PORT)
}); 