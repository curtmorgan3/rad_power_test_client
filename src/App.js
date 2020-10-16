import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { GoogleAuthProvider } from './Components/Helpers/GoogleAuthProvider';
import theme from './theme';
import ScrollToTop from './Components/Helpers/ScrollToTop';
import NotFound from './Components/Helpers/NotFound';

// Views
import Index from './Views/Index';
import Query from './Views/Query';
import Results from './Views/Results';
import Create from './Views/Create';
// End Views

// Components
import Navbar from './Components/Navbar';
// End Components
require('dotenv').config()

function App({ store }) {
  return (
    <MuiThemeProvider theme={theme}>
      <GoogleAuthProvider>
        <div className="App">
          <Provider store={store}>
            <Router>
              <ScrollToTop>
                <Navbar />

                <Switch>
                  <Route exact path='/' component={Index} />
                  <Route exact path='/query' component={Query} />
                  <Route exact path='/results' component={Results} />
                  <Route exact path='/create' component={Create} />

                  <Route component={NotFound} />
                </Switch>
              </ScrollToTop>
            </Router>
          </Provider>
        </div>
      </GoogleAuthProvider>
    </MuiThemeProvider>
  );
}

export default App;
