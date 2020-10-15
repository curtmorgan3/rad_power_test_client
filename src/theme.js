import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#192D3D'
    },
    secondary: {
      main: '#C24D1C'
    },
    info: {
      main: '#4F4F4F'
    },
    success: {
      main: '#242F36'
    }
  }, 
  typography: {
    h1: {
      color: '#4F4F4F',
      textAlign: 'center'
    },
    h2: {
      color: '#4F4F4F',
      textAlign: 'center'
    },
    h3: {
      color: '#4F4F4F',
      textAlign: 'center'
    },
    h4: {
      color: '#4F4F4F',
      textAlign: 'center'
    },
    h5: {
      color: '#4F4F4F',
      textAlign: 'center'
    },
    h6: {
      color: '#4F4F4F',
      textAlign: 'center'
    },
    p: {
      color: '#4F4F4F',
      textAlign: 'center'
    },
    button: {
      textDecoration: 'none',
      textTransform: 'none',
    },
  },
});

export default theme;