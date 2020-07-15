import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions";

const LoginPage = ({loginUser}) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    loginUser(state)
  };
  return (
    <div>
      <p>Ты должен зарегистрироватся что бы создать асинхнонный пост</p>
      <h3>Войти</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Login
          <input 
            name="username" 
            placeholder="Username" 
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input type="password" 
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
  loginUser: infoUser => dispatch(loginUser(infoUser))
})

export default connect(null,mapDispatchToProps)(LoginPage);
