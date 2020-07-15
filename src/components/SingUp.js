import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from './../redux/actions';

const SingUp = ({registerUser}) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    extra: "",
  });
  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    registerUser(state)
  };
  return (
    <div>
      <h3>Регистрация</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Login
          <input
            value={state.username}
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            value={state.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  registerUser: userInfo => dispatch(registerUser(userInfo))
})

export default connect(null,mapDispatchToProps)(SingUp);
