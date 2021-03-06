import React, { Component } from 'react';
import { Input, Row } from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import { withRouter } from 'react-router-dom';

import { loginUser } from '../../actions/loginActions';
import '../../assets/css/login.scss';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loaded: true
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push('/');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
      this.setState({ loaded: true });
      return;
    }
  }
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    this.setState({ loaded: false });
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <Row>
        <form onSubmit={this.onSubmit}>
          <Input
            id="email"
            type="email"
            onChange={this.onChange}
            label="Email"
            s={12}
            required
          />
          <Input
            id="password"
            type="password"
            onChange={this.onChange}
            label="password"
            s={12}
            required
          />
          <div className="data">
            <button id="loginBtn" className="btn pink lighten-1 z-depth-0">
              Login
            </button>
            <a className="pass-reset" href="/password-reset">
              <div className="loader">
                <Loader loaded={this.state.loaded} />
              </div>
              Forgot Password?
            </a>
            <p>
              Dont have an account? <a href="/signup"> SignUp</a>
              
            </p>
          </div>
        </form>
      </Row>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser }
  )(Login)
);
