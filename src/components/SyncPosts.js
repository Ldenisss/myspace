import React, {useState} from "react";
import { connect } from 'react-redux'
import { addPost } from './../redux/actions';

const SyncPosts = ({addPost}) => {
  const [input, setInput] = useState("");
    const submitHendler = (event) => {
      event.preventDefault();
      let newPost = {
        title: input,
        id: Date.now().toString(),
      };
      addPost(newPost);
      setInput("");
    };
    const changeHandler = (event) => {
      setInput(event.target.value);
    };
  return (
    <div>
      <h2>Cинхронные посты</h2>
      <div className="form">
          <form onSubmit={submitHendler}>
            <input value={input} onChange={changeHandler} />
            <button>Записать</button>
          </form>
        </div>
    </div>
  )
}

const mapDispatchToProps = {
  addPost
};
export default connect(null,mapDispatchToProps)(SyncPosts)
