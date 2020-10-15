import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import ScrollToTop from './Components/Helpers/ScrollToTop';
import NotFound from './Components/Helpers/NotFound';

// Views
import Index from './Views/Index';
// End Views

// Components
// End Components

function App({ store }) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Provider store={store}>
          <Router>
            <ScrollToTop>
              <Switch>
                <Route exact path='/' component={Index} />

                <Route component={NotFound} />
              </Switch>
            </ScrollToTop>
          </Router>
        </Provider>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
