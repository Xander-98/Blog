import axios from "axios";
import { useState } from "react";
export function PostNew(props) {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreatePosts(params);
    event.target.reset();
  };

  const handleCreatePosts = (params) => {
    axios.post("http://localhost:3000/posts", params).then((response) => {
      window.location.href = "/";
      setPosts([...posts, response.data]);
    });
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" className="form-control" type="text" />
        </div>
        <div>
          Body: <input name="body" className="form-control" type="text" />
        </div>
        <div>
          Image: <input name="image" className="form-control" type="text" />
        </div>
        <div>
          <button className="btn btn-primary mt-3" type="submit">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
