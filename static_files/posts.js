class Post {
	constructor(title, content) {
		this.title = title;
		this.content = content;
	}

	// Saves the post to the database for permanance.
	save() {
		// "POST /post"
		$.post('/post', {title: this.title, content: this.content});
	}
}

// We will make a call to the server to retrieve all posts.
// When the posts have been retrieves, we will eventually call
// the callback function with the resulting posts.
Post.getAllPosts = function(callback) {
	$.get('/posts', callback);
}