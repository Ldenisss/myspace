import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const About = ({ posts }) => {
  return (
    <div>
      <h3>POTS</h3>
      <ul>
        {posts.length > 0
          ? posts.map((post) => <Post key={post.id} post={post} />)
          : "ПОСТОВ ПОКА ЧТО НЕТ"}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts.posts,
  };
};
export default connect(mapStateToProps, null)(About);
