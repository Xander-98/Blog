import axios from "axios";
import { useState, useEffect } from "react";

export function PostIndex(props) {
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts, []);
  return (
    <div id="posts-index">
      <h2>All Posts</h2>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p> {post.body}</p>
          <button onClick={() => props.onSelectPost(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
