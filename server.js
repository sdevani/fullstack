const express = require('express');
const app = express();
const {Post} = require('./post.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

let posts = [
	new Post("First post", "Insert image image"),
	new Post("Second post", "Insert image image"),
	new Post("Third post", "Insert image image")
];

app.get('/posts', function(req, res) {
	res.json(posts);
});

app.post('/post', function(req, res) {
	let title = req.body.title;
	let content = req.body.content;
	let newPost = new Post(title, content);
	posts.push(newPost);
	res.json(newPost);
});

app.use(express.static('static_files'));

app.listen(3000, () => console.log('Example app running!'));