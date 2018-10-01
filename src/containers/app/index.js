import React from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Home from '../home';
import About from '../about';
import Mortgage from '../mortgage';
import ResponsiveDrawer from '../../components/organisms/drawer/drawer';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ResponsiveDrawer>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/mortgage" component={Mortgage} />
    </ResponsiveDrawer>
  </MuiThemeProvider>
);

export default App;
