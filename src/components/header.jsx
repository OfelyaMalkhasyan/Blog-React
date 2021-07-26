import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  homeIcon: {
    fontSize: 16,
  },
  loginButton: {
    color: "white",
  },
  createPost: {
    color: "white",
  },
  blog: {
    color: "white",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Link to="/home" className={classes.blog}>
          <HomeIcon className={classes.homeIcon}/>
          Blog </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit"> <Link to="/login" className={classes.createPost}>Create Post </Link></Button>
          </Typography>
          <Button color="inherit" ><Link to="/login" className={classes.loginButton}>Log in </Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}