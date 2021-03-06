import React from 'react';
import { GoogleLogin, GoogleLogout} from 'react-google-login';

import ApiClientKey from '../config/apiClientId';
import MyApiClientKey from '../config/apiClientIdMine';

class LoginControl extends React.Component  {

  constructor(props) {
    super(props);

    this.apiKey = '';

    if(ApiClientKey.length > 0) {
      this.apiKey = ApiClientKey;
    } else {
      this.apiKey = MyApiClientKey;
    }

  }

  loginSuccess = (response) => {
    console.log("Successful Login");
    this.props.onLoggedInChange(true);
    this.props.onProfileObjectChange(response.profileObj);
  }

  loginFailure = (response) => {
    console.log("Failed Login");
    console.log(response);
    this.props.onLoggedInChange(false);
    this.props.onProfileObjectChange({});
  }

  logoutSuccess = (response) => {
    console.log("Successful Logout");
    console.log(response);
    this.props.onLoggedInChange(false);
    this.props.onProfileObjectChange({});
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <div>
        <GoogleLogin
          clientId={this.apiKey}
          render={renderProps => (
            <button onClick={renderProps.onClick}>Login</button>
          )}
          discoveryDocs= {ApiClientKey}
          scope= 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
          buttonText="Login"
          onSuccess={this.loginSuccess}
          onFailure={this.loginFailure}
        />

        </div>
      )
    } else {
      return (
        <div>
        <GoogleLogout
          buttonText="Logout"
          render={renderProps => (
            <button onClick={renderProps.onClick}>Logout</button>
          )}
          onLogoutSuccess={this.logoutSuccess}
        />

        </div>
      )
    }
  }
}

export default LoginControl;
