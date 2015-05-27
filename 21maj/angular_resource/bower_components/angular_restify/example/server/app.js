var express = require('express');
var app = express();

var port = 8000;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(allowCrossDomain);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
	res.send('default page');
});

app.get('/api/Books/Genre/:genre/Year/:year', function(req,res){
	console.log("GET WITH GENRE AND YEAR");
	res.send([{ genre : req.params.genre, year : req.params.year, title : 'The crow', author : 'Edgar Allan Poe' }]);
});

app.get('/api/Books/Author/:author',function(req,res){
	console.log("GET WITH AUTHOR");
	// req.params
	res.send([{ name : 'Farewell to arms', authorId : req.params.author, genre : 'Drama' }]);
});

app.get('/api/Books',function(req,res){
	res.send([{ name : 'a title' }]);
});

app.get('/api/Books/:id',function(req,res){
	console.log("GET WITH ID");
	res.send({ name : 'a title' });
});

app.post('/api/Books',function(req,res){
	console.log( "posted: "+ req.body.name);
	res.send({ name : req.body.name, id: 1});
});

app.put('/api/Books',function(req,res){
	console.log('updating');
	res.send({ name : req.body.name, id: req.body.id});
});


app.listen(port,function(){
	console.log('app running at ' + port)
});