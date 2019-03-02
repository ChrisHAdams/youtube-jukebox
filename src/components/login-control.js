import React from 'react';
import { GoogleLogin, GoogleLogout} from 'react-google-login';
import ThemeChangeButton from '../atoms/theme-change-button';
import ApiClientKey from '../config/apiClientId';


class LoginControl extends React.Component  {

  loginSuccess = (response) => {
    console.log("Successful Login");
    this.props.onLoggedInChange(true);
    this.props.onProfileObjectChange(response.profileObj);
  }

  loginFailure = (response) => {
    console.log("Failed Login");
    this.props.onLoggedInChange(false);
    this.props.onProfileObjectChange({});
  }

  logoutSuccess = (response) => {
    console.log("Successful Logout");
    this.props.onLoggedInChange(false);
    this.props.onProfileObjectChange({});
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <div>
        <GoogleLogin
          clientId="483459046466-68jj5e6lketk95mmqqa78d446clfuj2h.apps.googleusercontent.com"
          render={renderProps => (
            <button onClick={renderProps.onClick}>Login</button>
          )}
          discoveryDocs= {ApiClientKey}
          scope= 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
          buttonText="Login"
          onSuccess={this.loginSuccess}
          onFailure={this.loginFailure}
        />
        <ThemeChangeButton onClick={this.props.themeChange}/>
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
        <ThemeChangeButton onClick={this.props.themeChange}/>
        </div>
      )
    }
  }
}

export default LoginControl;
