require('normalize.css/normalize.css');
require('styles/Main.scss');
import { Switch, Route } from 'react-router-dom'
import React from 'react';
import RegisterComponent from './Register';
import LoginComponent from './Login';
import HeaderComponent from './Header';
import DashboardComponent from './Dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppComponent extends React.Component {
  render() {

    return (
      <div >
        <MuiThemeProvider>
          <div>
            <HeaderComponent />
            <Switch>
              <Route exact path='/' component ={DashboardComponent} />
              <Route exact path='/login' component ={LoginComponent} />
              <Route exact path='/register' component ={RegisterComponent} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
