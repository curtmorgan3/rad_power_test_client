import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../redux/actions';
import { Redirect } from 'react-router-dom';
import { useGoogleLogin } from 'react-use-googlelogin'
import Ajax from '../../Ajax';

import { makeStyles } from '@material-ui/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import GoogleLogin from '../../Components/GoogleLogin';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '30vw',
    minHeight: '400px',
    width: '40vw',
    minWidth: '350px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: '10vh',
  },
  header: {
    color: theme.palette.secondary.main,
  },
  input: {
    width: '60%'
  },
  submit: {
    backgroundColor: theme.palette.secondary.main,
    color: '#ffffff'
  }
}))

const Index = () => {
  // Component Styles
  const classes = useStyles();
  ///////////////////

  // Component State
  const [username, setUsername] = React.useState('');
  const [validationErrors, setErrors] = React.useState([]);
  const [redirect, setRedirect] = React.useState(false);
  /////////////////

  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem('rad_power_test_token');

    if (token) {
      dispatch(setAuthToken(token));
      setRedirect(true);
    }
  }, []);

  const handleChange = (e) => {
    setErrors([]);
    setUsername(e.target.value);
  }

  const handleSubmit = async (e) => {
    const disallowedCharacters = new RegExp(/!|@|#|\$|%|\^|&|\*|[\d]/g);

    let errors = [];

    if (disallowedCharacters.test(username)) errors.push('Whoa, only alphabetic characters please!');
    if (username.includes(' ')) errors.push('No spaces please!');

    if (errors.length) {
      setErrors(errors);
    } else {
      const token = await Ajax.authenticate({ username });
      
      if (token) {
        localStorage.setItem('rad_power_test_token', token);
        dispatch(setAuthToken(token));
        setRedirect(true);
      } else {
        window.alert('Something went wrong!');
      }
    }
  }

  if (redirect) {
    return (
      <Redirect to='/query' />
    )
  }

  return (
    <div className={classes.container}>
      <Typography variant='h3' className={classes.header}>Welcome!</Typography>

      <Typography variant='body1'>
        To get started, please enter any username below. We'll use that to authenticate your session.
        You'll only need to do this once.
      </Typography>

      <TextField className={classes.input} variant='filled' name='username' value={username} onChange={handleChange} />

      {validationErrors.length ? validationErrors.map((err, i) => (
        <Typography variant='body1' style={{color: 'red'}} key={i}>{err}</Typography>
      )) : null}
  
      <Button className={classes.submit} onClick={handleSubmit}>Submit</Button>

      <GoogleLogin />
    </div>
  )
}

export default Index;