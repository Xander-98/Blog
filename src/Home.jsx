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

  const handleCreatePosts = (params) => {
    axios.post("http://localhost:3000/posts", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleUpdatePost = (id, params) => {
    console.log("handleUpdatePost", params);
    axios
      .patch("http://localhost:3000/posts/" + id, params)
      .then((response) => {
        console.log(response.data);
        setIsPostsShowVisible(false);
        setPosts(
          posts.map((post) => {
            if (post.id === id) {
              return response.data;
            } else {
              return post;
            }
          })
        );
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        handleHidePost();
      });
  };

  const handleDestroyPost = (post) => {
    axios.delete("http://localhost:3000/posts/" + post.id).then((response) => {
      setPosts(posts.filter((unpost) => unpost.id !== post.id));
      handleHidePost();
    });
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
      <PostNew onCreatePosts={handleCreatePosts} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
}
