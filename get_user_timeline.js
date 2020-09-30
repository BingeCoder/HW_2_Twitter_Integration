var express = require('express');
var app = express();


// viewed at http://localhost:8080
app.use(express.static(__dirname + '/dashboard.html'))
app.listen(3000, function(){
	console.log("I am running");
});

app.listen(8080);