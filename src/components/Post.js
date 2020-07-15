import React from "react";

const Post = ({ post }) => {
  return <li>title {post.title}, {post.id}</li>;
};

export default Post;
