import React from 'react';
import HeaderBar from '../Home/Header';
import SignIn from './LoginForm';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

export default function Home() {
    const useStyles = makeStyles((theme) => ({
        loginButton: {
          color: "white",
          textDecoration: "none",
        }
      }));
      const classes = useStyles();


    return(
        <div className="login">
            <HeaderBar>
            <Button color="inherit" ><Link to="/posts" className={classes.loginButton}>Log in </Link></Button>
            </HeaderBar>
            <SignIn/>
        </div>
    )
}