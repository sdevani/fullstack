/*
1) How to show different views
2) How to respond to clicks or form submissions
3) How to make a request to the server
*/

let callback = function(data) {
	let posts = data.map(function(obj) {
			return new Post(obj.title, obj.content);
	});

	ReactDOM.render(
	  <Imgur homePagePosts={posts} myName="Shehzan"/>,
	  document.getElementById('app')
	);
}

let homePagePosts = Post.getAllPosts(callback);