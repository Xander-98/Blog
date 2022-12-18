export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleOnClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div>
      <h2> {props.post.title} </h2>
      <p> {props.post.body} </p>
      <img src={props.post.image} alt="" />
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" className="form-control" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" className="form-control" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" className="form-control" type="text" />
        </div>
        <div>
          <button className="btn btn-primary mt-3" type="submit">
            Edit Post
          </button>
        </div>
      </form>
      <button className="btn btn-danger mt-3" onClick={handleOnClick}>
        Delete Post
      </button>
    </div>
  );
}
