import React from 'react';
import authRequests from '../../firebaseRequests/auth';
import {Link} from 'react-router-dom';
import './Login.css';

class Login extends React.Component
{
  state =
  {
    user:
    {
      email: 'blrussell09@gmail.com',
      password: 'jamroc09',
    },
  };

  loginClickEvent = (e) =>
  {
    const { user } = this.state;
    e.preventDefault();
    authRequests
      .loginUser(user)
      .then(() =>
      {
        this.props.history.push('/myStuff');
      })
      .catch((error) => { console.error('There was an error in logging in', error); });
  };

  render ()
  {
    const { user } = this.state;
    return (
      <div className="Login">
        <div id="login-form">
          <h1 className="text-center">Login</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                Email:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={user.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-4 control-label">
                Password:
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={user.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Link to="/register">Need to Register?</Link>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.loginClickEvent}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
};

export default Login;
