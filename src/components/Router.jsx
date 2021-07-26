import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Login from "./LoginPage";

export default function Routers() {
    return(
        <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login}/>
      </Switch>
      <Redirect from='/' to='/home' />
    </Router>
    )
}
