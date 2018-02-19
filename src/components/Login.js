require('styles/App.css');
require('normalize.css/normalize.css');
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Redirect } from 'react-router'
import axios from 'axios';
import React from 'react';
let querystring = require('querystring');
let config = {
  baseURL: `http://${process.env.BASE_URL}`,
  headers: {
    'crossDomain': true,
    'Access-Control-Allow-Origin': '*'
  }
};

class LoginComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Pword: ''
    }
    this.sendLoginInfo = this.sendLoginInfo.bind(this);
  }

  sendLoginInfo() {
    axios.post('/token', querystring.stringify({
      email: this.state.Email,
      password: this.state.Pword
    }), config)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="">

        </div>
        <TextField
          hintText="Enter an email"
          floatingLabelText="Email"
          floatingLabelFixed={true}
          onChange = {(e)=>{this.setState({Email: e.target.value})}}
          /><br />
        <TextField
          hintText="Enter a password"
          floatingLabelText="Password"
          onChange = {(e)=>{this.setState({Pword: e.target.value})}}
          type="password"
          /><br />
        <FlatButton label="Full width" onClick={this.sendLoginInfo} fullWidth={true} />
      </div>
    )
  }
}

LoginComponent.defaultProps = {
};

export default LoginComponent;
