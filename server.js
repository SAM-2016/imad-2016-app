var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
	'article-one': {
		title : 'Article One | Sunny Akhtar',
		heading : 'Article One',
		date : 'Sep 23, 2016',
		content : `<p>
						This is my first article.This is my first article.This is my first article.This is my first article.
						This is my first article.This is my first article.This is my first article.This is my first article.
						This is my first article.This is my first article.This is my first article.This is my first article.
				   </p>`
	},
	'article-two': {
		title : 'Article Two | Sunny Akhtar',
		heading : 'Article Two',
		date : 'Sep 3, 2016',
		content : `<p>
						This is my Second article.This is my Second article.This is my Second article.This is my Second article.
						This is my Second article.This is my Second article.This is my Second article.This is my Second article.
						This is my Second article.This is my Second article.This is my Second article.This is my Second article.
				   </p>
				   <p>
						This is my Second article.This is my Second article.This is my Second article.This is my Second article.
						This is my Second article.This is my Second article.This is my Second article.This is my Second article.
						This is my Second article.This is my Second article.This is my Second article.This is my Second article.
				   </p>`
	},
	'article-three': {
		title : 'Article Three | Sunny Akhtar',
		heading : 'Article Three',
		date : 'Sep 13, 2016',
		content : `<p>
						This is my Third article.This is my Third article.This is my Third article.This is my Third article.
						This is my Third article.This is my Third article.This is my Third article.This is my Third article.
						This is my Third article.This is my Third article.This is my Third article.This is my Third article.
				   </p>
				   <p>
						This is my Third article.This is my Third article.This is my Third article.This is my Third article.
						This is my Third article.This is my Third article.This is my Third article.This is my Third article.
						This is my Third article.This is my Third article.This is my Third article.This is my Third article.
				   </p>
				   <p>
						This is my Third article.This is my Third article.This is my Third article.This is my Third article.
						This is my Third article.This is my Third article.This is my Third article.This is my Third article.
						This is my Third article.This is my Third article.This is my Second article.This is my first article.
				   </p>`
	}
};

function createTemplate (data) {
	var title = data.title;
	var heading = data.heading;
	var date = data.date;
	var content = data.content;
		var htmltemplate = `
			<!DOCTYPE html>
			<html>
			<head>
			  <title>${title}</title>
			  <link rel="stylesheet" type="text/css" href="/ui/style.css">
			  <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" />
			  <script type="text/javascript" src="/ui/main.js"></script>
			</head>
			<body>
				<div class="container">
				  <div>
				  	<ul>
				  		<li><a href="/">Home</a></li>
				  		<li><a href="/article-two">Article-two</a></li>
				  		<li><a href="/article-three">Article-three</a></li>
				  	</ul>
				  </div>
				  	${heading}
				  <div>
				  	${date}
				  </div>
				  <hr />
				  <div>
				  	${content}
				  </div>
			</body>
			</html>
		`
	return htmltemplate;	
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res) {
	//articleName == article-one
	//articles[articleName] == {} content object for article one
	var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function(req, res) {
	res.sendFile(path.join(__dirname,'ui','main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
