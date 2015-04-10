

var express =require('express');
var app = express();
var http = require('http').Server(app);
// var io = require('socket.io')(http);	

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname+'/public'));


app.get('/', function(req, res){
	// console.log("yup there");	
  res.sendFile(__dirname + '/index.html');

});

app.get('/contact', function(req, res){
	// console.log("yup there");	
  res.sendFile(__dirname + '/contact.html');

});

app.get('/menu', function(req, res){
	// console.log("yup there");	
  res.sendFile(__dirname + '/menu.html');

});



http.listen(app.get('port'));

