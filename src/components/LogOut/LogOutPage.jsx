import React from "react";
import Button from '@material-ui/core/Button';
import HeaderBar from "../Home/Header";
import Box  from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';





export default function LogOut() {
    const useStyles = makeStyles((theme) => ({
        box: {
            textAlign: "center"
        },
        button: {
            color: "white",
            textDecoration: "none",
        }

      }));
      const classes = useStyles();
    
   

  return (
    <div className='container'>
      <HeaderBar />
      <Box component='div' className={classes.box}>
        <h1>Log Out</h1>
        <p>Are you sure about leaving us?</p>
        <Button 
          variant='contained'
          color='primary'
          >
          <Link to ="/login" className={classes.button}>
          Log out
          </Link>
        </Button>
      </Box>
    </div>
     
  );
}
