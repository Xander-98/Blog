export function PostIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h2>All Posts</h2>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>Body: {post.body}</p>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}
