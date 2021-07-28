import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: "none",
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [name, setName]= useState("");
  const [password, setPassword] = useState("");

  function isValid() {
    return name.length > 2 && password.length > 6
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

   const saveData=()=> {
  localStorage.setItem("data", 
    JSON.stringify({name, password})
  )
  }
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <form onSubmit= {handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value= {name}
            onChange= {(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {password}
            onChange= {(e) => setPassword(e.target.value)}
          />
          <Link to ="/posts" className={classes.link}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!isValid()}
            onClick={()=> {saveData()}}>
            Log In 
          </Button>
          </Link>
        </form>
      </div>
      
    </Container>
  );
}




