import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { models, generateHash, validationError } from './helpers.js';

import { Typography, MenuItem, FormControl, Select, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '400px',
    width: '80vw',
    minWidth: '350px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10vh',
    marginBottom: '5vh'
  },
  section: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },
  allModels: {
    display: 'flex',
    width: '500px',
    height: '400px',
    margin: '2% 0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modelImg: {
    height: '250px',
  },
  modelArrow: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  header: {
    color: theme.palette.secondary.main,
    marginBottom: '2%',
    marginRight: '2%'
  },
  submit: {
    backgroundColor: theme.palette.secondary.main,
    color: '#ffffff'
  }
}))

const Create = () => {
  // Component Styles
  const classes = useStyles();
  ///////////////////

  // Redux Store
  const token = useSelector(state => state.auth.token);
  /////////////

  // Component State
  const [form, updateForm] = React.useState({
    model: '',
    modelYear: '',
    manMonth: '',
    manYear: '',
    version: '',
    assembly: ''
  });
  const [currentModel, setCurrentModel] = React.useState(0);
  const [hash, setHash] = React.useState(null);
  const [alertMsg, setAlert] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);
  /////////////////

  React.useEffect(() => {
    if (!token) {
      setRedirect(true);
    }
  }, [])

  const handleChange = (e) => {
    setAlert('');
    const update = {...form};
    update[e.target.name] = e.target.value;
    updateForm(update);
  }

  const handleSwitchModel = (num) => {
    let index = currentModel + num;

    if (index < 0) index = 0;
    if (index > models.length - 1) index = models.length - 1;

    setCurrentModel(index);
  }

  const handleSubmit = () => {
    const model = models[currentModel];
    form.model = model.code;

    if (validationError(form)) {
      setAlert('All fields required.')
    } else {
      const hash = generateHash(form);
      setHash(hash);
    }
  }

  if (redirect) {
    return (
      <Redirect to='/' />
    )
  }

  return (
    <div className={classes.container}>
      <Typography variant='h3' className={classes.header}>Create A New Serial Hash</Typography>

      { alertMsg ? <Alert style={{width: '50%', margin: 'auto'}} severity="error">{alertMsg}</Alert> : null }
      { hash ? <Alert style={{width: '50%', margin: 'auto'}} severity="success">{hash}</Alert> : null }

      <Typography variant='h6' className={classes.header}>Choose a Bike Model</Typography>

      <div className={classes.allModels}>
        <ArrowBackIosIcon className={classes.modelArrow} fontSize='large' onClick={() => handleSwitchModel(-1)} />
        <div key={models[currentModel].name} className={classes.model}>
          <Typography variant='body1' style={{textAlign: 'center'}}>{models[currentModel].name}</Typography>
          <img alt={models[currentModel].name} className={classes.modelImg} src={models[currentModel].img}></img>
        </div>
        <ArrowForwardIosIcon className={classes.modelArrow} fontSize='large' onClick={() => handleSwitchModel(1)}/>
      </div>


      <div className={classes.section}>
        <Typography variant='h6' className={classes.header}>Model Year</Typography>
        <FormControl className={classes.formControl}>
          <Select
            name='modelYear'
            value={form.modelYear}
            onChange={handleChange}
          >
            <MenuItem value='2021'>2021</MenuItem>
            <MenuItem value='2020'>2020</MenuItem>
            <MenuItem value='2019'>2019</MenuItem>
            <MenuItem value='2018'>2018</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.section}>
        <Typography variant='h6' className={classes.header}>Manufactured Month</Typography>
        <FormControl className={classes.formControl}>
          <Select
            name='manMonth'
            value={form.manMonth}
            onChange={handleChange}
          >
            <MenuItem value='1'>January</MenuItem>
            <MenuItem value='2'>February</MenuItem>
            <MenuItem value='3'>March</MenuItem>
            <MenuItem value='4'>April</MenuItem>
            <MenuItem value='5'>May</MenuItem>
            <MenuItem value='6'>June</MenuItem>
            <MenuItem value='7'>July</MenuItem>
            <MenuItem value='8'>August</MenuItem>
            <MenuItem value='9'>September</MenuItem>
            <MenuItem value='O'>October</MenuItem>
            <MenuItem value='N'>November</MenuItem>
            <MenuItem value='D'>December</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.section}>
        <Typography variant='h6' className={classes.header}>Manufactured Year</Typography>
        <FormControl className={classes.formControl}>
          <Select
            name='manYear'
            value={form.manYear}
            onChange={handleChange}
          >
            <MenuItem value='21'>2021</MenuItem>
            <MenuItem value='20'>2020</MenuItem>
            <MenuItem value='19'>2019</MenuItem>
            <MenuItem value='18'>2018</MenuItem>
            <MenuItem value='17'>2017</MenuItem>
            <MenuItem value='16'>2016</MenuItem>
            <MenuItem value='15'>2015</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.section}>
        <Typography variant='h6' className={classes.header}>Version</Typography>
        <FormControl className={classes.formControl}>
          <Select
            name='version'
            value={form.version}
            onChange={handleChange}
          >
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.section}>
        <Typography variant='h6' className={classes.header}>Assembly Location</Typography>
        <FormControl className={classes.formControl}>
          <Select
            name='assembly'
            value={form.assembly}
            onChange={handleChange}
          >
            <MenuItem value='F'>Factory F</MenuItem>
            <MenuItem value='V'>Factory V</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Button className={classes.submit} onClick={handleSubmit}>Generate Serial Hash</Button>

    </div>
  )
}

export default Create;