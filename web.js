var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(
      var fs = require('fs');
      var content;
      var data = fs.readFile('./index.html', function (err, data) {
	  if (err) {
	      throw err;
	  }
	  content = data;
	  console.log(content);
      };
);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
