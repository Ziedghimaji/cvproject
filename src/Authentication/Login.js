import React, { Component } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../Redux/action/authentication";
import {Button} from 'reactstrap'
import classnames from 'classnames'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const {errors}= this.state
    return (
      <div className="login">
        <div className="form">
          <h2 className="loginTitle">Log in and get to work</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="loginForm">
              <input
                   className={classnames('form-control loginInput', {
                    'is-invalid': errors.email
                })}
                type="text"
                name="email"
                id="loginEmail"
                placeholder="Email"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
               {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
              <input
                   className={classnames('form-control loginInput', {
                    'is-invalid': errors.password
                })}
                type="password"
                name="password"
                id="loginPassword"
                placeholder="Password "
                onChange={this.handleInputChange}
                value={this.state.password}
              />
               {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
            </div>

            <Button className="loginBtn" type="submit">
              Continue
            </Button>
          </form>
          <div className="joinUs">
            <h4 className="loginTitle">New Worker?</h4>

            <Button className="loginBtn">Sign Up</Button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
