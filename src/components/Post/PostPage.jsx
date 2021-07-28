import React from "react";
import HeaderBar from '../Home/Header';
import CreatePost from "./PostForm";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
export default function Post() {
 
const useStyles = makeStyles((theme) => ({
    loginButton: {
      color: "white",
      textDecoration: "none",
    }
  }));
  const classes = useStyles();
  
    return(
        <div className="post">
            <HeaderBar>
            <Button color="inherit" ><Link to="/logout" className={classes.loginButton}>Log out </Link></Button>
            </HeaderBar>
            <CreatePost/>
        </div>
    )
}