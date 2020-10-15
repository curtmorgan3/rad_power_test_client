import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Ajax from '../../Ajax';
import { parseInput, validateInput } from './helpers';
import { setBikeResults } from '../../redux/actions';

import { makeStyles } from '@material-ui/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

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

const Query = () => {
  // Component Styles
  const classes = useStyles();
  ///////////////////

  // Redux Store
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  //////////////

  // Component State
  const [query, setQuery] = React.useState('');
  const [alertMsg, setAlert] = React.useState('');
  const [redirect, setRedirect] = React.useState(null);
  /////////////////

  React.useEffect(() => {
    if (!token) {
      setRedirect('/');
    }
  }, [token])

  const handleChange = (e) => {
    setAlert('');
    setQuery(e.target.value);
  }

  const handleSubmit = async () => {
    const numbers = parseInput(query);
    const validationErrors = validateInput(numbers);

    if (!validationErrors.length) {
      const entries = await Ajax.getEntries(numbers);
      
      if (entries) {
        dispatch(setBikeResults(entries));
        setRedirect('/results');
      } else {
        setAlert('Something went wrong. Please try again.')
      }
    } else {
      setAlert(validationErrors.join(' '));
    }
  }

  if (redirect) {
    return (
      <Redirect to={redirect} />
    )
  }

  return (
    <div className={classes.container}>

      { alertMsg ? <Alert style={{width: '100%'}} severity="error">{alertMsg}</Alert> : null }

      <Typography variant='h3' className={classes.header}>New Query</Typography>
      
      <Typography variant='h6'>Enter the serial number (or numbers) to retrieve bike data.</Typography>

      <Typography variant='body1'>Try entering RB719F1000001</Typography>


      <TextField 
        className={classes.input} 
        variant='filled' 
        multiline
        value={query}
        onChange={handleChange}
      />

      <Button className={classes.submit} onClick={handleSubmit}>Submit</Button>

    </div>
  )
}

export default Query;