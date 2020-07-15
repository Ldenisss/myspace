import React from "react";
import { connect, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./components/About";
import AsyncPosts from "./components/AsyncPosts";
import LoginPage from "./components/LoginPage";
import SingUp from "./components/SingUp";
import SyncPosts from "./components/SyncPosts";
import { getProfileFetch } from "./redux/actions";

const SharedRoutes = () => {
  <>
    <Route path="/about" component={About} />
  </>;
};

const App = ({ getProfileFetch }) => {
  const isAuth = useSelector((root) => root.authReducer.isLoggedIn);

  if (isAuth) {
    return (
      <>
        <GetProfile />
        <Switch>
          <SharedRoutes />
          <Route path="/asyncPost" exact component={AsyncPosts} />
          <Redirect to="/asyncPost" />
        </Switch>
      </>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <SharedRoutes />
        <Route path="/singup">
          <SingUp />
        </Route>
        <Route path="/syncPost">
          <SyncPosts />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }

  // return (
  //   <div className="App">
  //     <div className="container">
  //       <ul>
  //         <li>
  //           <Link to="/about">Посмотреть посты</Link>
  //         </li>
  //         <li>
  //           <Link to="/syncPost">Создать синхронный пост</Link>
  //         </li>
  //         <li>
  //           <Link to="/asyncPost">Создать асинхронный пост</Link>
  //         </li>
  //         <li>
  //           <Link to="/singup">Регистрация</Link>
  //         </li>
  //       </ul>
  //       <hr />
  //       <p>Создай свой пост</p>

  //       <Switch>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/login">
  //           <LoginPage />
  //         </Route>
  //         <Route path="/singup">
  //           <SingUp />
  //         </Route>
  //         <PrivateRoute path="/asyncPost">
  //           <AsyncPosts />
  //         </PrivateRoute>
  //         <Route path="/syncPost">
  //           <SyncPosts />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </div>
  // );
};

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
});
export default connect(null, mapDispatchToProps)(App);
