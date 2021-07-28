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
import LogOut from "../LogOut/LogOutPage";
import YourPost from "../Post/Post";

export default function Routers() {
    return(
        <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/post' component={Post}/>
        <Route exact path ='/logout' component={LogOut}/>
        <Route exact path ='/posts' component={YourPost}/>
      </Switch>
      <Redirect from='/' to='/home' />
    </Router>
    )
}
