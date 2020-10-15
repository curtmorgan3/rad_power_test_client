import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#090809'
    },
    secondary: {
      main: '#25282A'
    },
    info: {
      main: '#FFFFFF'
    },
    success: {
      main: '#242F36'
    }
  }, 
  typography: {
    button: {
      textDecoration: 'none',
    },
  },
});

export default theme;