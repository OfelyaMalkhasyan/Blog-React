import React from 'react';
import HeaderBar from './Header';
import BodyBar from './Body';

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
        <div className="home">
            <HeaderBar>
            <Button color="inherit" ><Link to="/login" className={classes.loginButton}>Log in </Link></Button>
            </HeaderBar>
            <BodyBar/>
        </div>
    )
}

