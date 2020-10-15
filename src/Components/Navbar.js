import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '5vw',
    minHeight: '50px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 2%',
    backgroundColor: theme.palette.primary.main
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    marginRight: '5%'
  }
}));


const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to='/query' className={classes.link}><Typography variant='body1'>New Query</Typography></Link>
      <Link to='/results' className={classes.link}><Typography variant='body1'>Results</Typography></Link>
      <Link to='/create' className={classes.link}><Typography variant='body1'>Create New Serial</Typography></Link>
    </div>
  )
}

export default Navbar;