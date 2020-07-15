import React from "react";
import { connect} from "react-redux";
import { fetchPost } from "../redux/actions";
import Post from "./Post";


const AsyncPosts = ({fetchPost,posts}) => {
  console.log(posts)
  return (
    <div>
      <h2>Асинхронные посты</h2>
      
      <ul>
      { posts.length ? posts.map((post) => <Post key={post.id} post={post}/>) : "Посты не загружены, нажмите кнопку загрузить" }
      </ul>
      { !posts.length ? <button onClick={() => fetchPost()}>Загрузить</button>: ''}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts.fetchedPost,
  };
};
const mapDispatchToProps = {
  fetchPost
};
export default connect(mapStateToProps,mapDispatchToProps)(AsyncPosts);
