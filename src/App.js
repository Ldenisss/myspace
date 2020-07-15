import React, { useEffect } from "react";
import SyncPosts from "./components/SyncPosts";
import AsyncPosts from "./components/AsyncPosts";
import { Switch, Route, Link } from "react-router-dom";
import About from './components/About';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';
import SingUp from "./components/SingUp";
import { connect } from "react-redux";
import {getProfileFetch} from './redux/actions'


const App = ({getProfileFetch}) => {
  useEffect(()=> {
    getProfileFetch()
  })
  return (
    <div className="App">
      <div className="container">
        <ul>
          <li>
            <Link to="/about">Посмотреть посты</Link>
          </li>
          <li>
            <Link to="/syncPost">Создать синхронный пост</Link>
          </li>
          <li>
            <Link to="/asyncPost">Создать асинхронный пост</Link>
          </li>
          <li>
            <Link to="/singup">Регистрация</Link>
          </li>
        </ul>
        <hr />
        <p>Создай свой пост</p>

        <Switch>
        <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/singup">
            <SingUp/>
          </Route>
          <PrivateRoute path="/asyncPost">
            <AsyncPosts />
          </PrivateRoute>
          <Route path="/syncPost">
            <SyncPosts />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})
export default connect(null,mapDispatchToProps)(App);
