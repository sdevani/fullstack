class Imgur extends React.Component {
  constructor(props) {
  	console.log(props);
  	super(props);
  	this.addNewPost = this.addNewPost.bind(this);
  	this.updateInputTitle = this.updateInputTitle.bind(this);
  	this.updateInputContent = this.updateInputContent.bind(this);

  	this.state = {
  		newPost: {
  			title: 'Add your title here',
  			content: 'Add your content here'
  		},

  		posts: props.homePagePosts
  	};
  }

  addNewPost(e) {
  	e.preventDefault();
  	let newPost = new Post(this.state.newPost.title, this.state.newPost.content);
  	newPost.save();
  	this.state.posts.push(newPost);
  	this.state.newPost = {
  		title: "",
  		content: ""
  	};

  	this.setState(this.state);
  	console.log("It was clicked!!", this.state.newPost.title, this.state.newPost.content);
  }

  updateInputTitle(event) {
  	this.state.newPost.title = event.target.value;
  	this.setState(this.state);
  }

  updateInputContent(event) {
  	this.state.newPost.content = event.target.value;
  	this.setState(this.state);
  }

  render() {
  	let homePagePosts = this.state.posts;
    const postElements = homePagePosts.map(function(post, index) {
        return (
        	<div key={'post_' + index}>
        		<h2>{post.title}</h2>
        		<p>{post.content}</p>
        	</div>
        );
    });
    return (
      <div className="homePage">
      	<h1>Welcome to Imgur!</h1>
        {postElements}
        <h1>Add your own post</h1>

        <form onSubmit={this.addNewPost}>
        	Title:<input type="text" value={this.state.newPost.title} onChange={event => this.updateInputTitle(event)}/>
        	Content:<input type="text" value={this.state.newPost.content} onChange={event => this.updateInputContent(event)}/>
        	<input type="submit"/>
        </form>
      </div>
    );
  }
}