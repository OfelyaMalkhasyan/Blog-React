import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    marginLeft: "720px",
  },
  box: {
      border: "1px solid grey",
      padding: "10px",
      marginTop: "20px",
      backgroundColor: "#80808008",
  },
  story: {
      textAlign: "center",
      fontSize: "25px",
  }
 }));

export default function CreatePost() {
  const classes = useStyles();
  const styles = {
    marginLeft: "200px",
    width: "800px",
    marginBottom: "20px",
  };
  return (
    <div className={classes.container}>
      <Box component='div' display='block' style={styles} className={classes.box}>
        <Box component='h3' className={classes.story}>Tell us your story!</Box>

        <TextField
          id='standard-basic'
          label='Title*'
          style={{ width: "600px" }}
        />
        <TextField
          id='standard-textarea'
          label='Content*'
          placeholder='Write your post...'
          multiline
          rows={12}
          rowsMax={12}
          fullWidth
          style={{ display: "block" }}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          style={{ borderRadius: "20em",  }}
          endIcon={<DoneRoundedIcon></DoneRoundedIcon>}>
        </Button>
      </Box>
    </div>
  );
}