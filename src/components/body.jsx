import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
 
}));

export default function BodyBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Box component="h2" className={classes.text} m={1}>
        There is no post on web-site.
        </Box>
        <Box component="h1" className={classes.login} m={1}>
        <Link>Log in</Link> and be our first story teller.
        </Box>
      
    </div>
  );
}