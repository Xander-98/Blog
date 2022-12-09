export function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        {" "}
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        User: <input type="text" />
        <div></div>
        <button type="post">Submit Post</button>
      </form>
    </div>
  );
}
