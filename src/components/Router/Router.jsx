import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/LoginPage";
import Post from "../Post/PostPage";

export default function Routers() {
    return(
        <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/post' component={Post}/>
      </Switch>
      <Redirect from='/' to='/home' />
    </Router>
    )
}
