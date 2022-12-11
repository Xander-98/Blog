import axios from "axios";
import { useState, useEffect } from "react";
import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <div className="container"></div>
      <PostIndex posts={posts} onSelectPost={handleShowPost} />
      <PostNew />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
