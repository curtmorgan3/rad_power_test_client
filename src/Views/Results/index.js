import React from 'react';
import { useSelector } from 'react-redux';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '40vw',
    minHeight: '400px',
    width: '80vw',
    minWidth: '350px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10vh',
  },
  tableHeader: {
    color: theme.palette.secondary.main,
    marginBottom: '2%'
  },
  head: {
    backgroundColor: theme.palette.primary.main,
    '& th, td': {
      color: '#ffffff'
    }
  },
  row: {
    '& th, td': {
      backgroundColor: '#ffffff',
      color: theme.palette.primary.main
    }
  }
}))

const Results = () => {
  // Component Styles
  const classes = useStyles();
  ///////////////////

  // Redux Store
  const entries = useSelector(state => state.bikes.results);
  /////////////

  return (
    <div className={classes.container}>
      <Typography variant='h3' className={classes.tableHeader}>Rad Results</Typography>

      <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.head}>
                <TableCell>Model</TableCell>
                <TableCell align="right">Model Year</TableCell>
                <TableCell align="right">Manufactured Month</TableCell>
                <TableCell align="right">Manufactured Year</TableCell>
                <TableCell align="right">Assembly Location</TableCell>
                <TableCell align="right">Version</TableCell>
                <TableCell align="right">Unique</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((row) => (
                <TableRow key={row.name} className={classes.row}>
                  <TableCell component="th" scope="row">
                    {row.model}
                  </TableCell>
                  <TableCell align="right">{row.modelYear}</TableCell>
                  <TableCell align="right">{row.manufacturedMonth}</TableCell>
                  <TableCell align="right">{row.manufacturedYear}</TableCell>
                  <TableCell align="right">{row.assemblyPlant}</TableCell>
                  <TableCell align="right">{row.version}</TableCell>
                  <TableCell align="right">{row.unique}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Results;