import React, { Component } from "react";
import "./Register.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../Redux/action/authentication";
import classnames from "classnames";
import { Button } from "reactstrap";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
    
  }
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    // console.log(user);
    this.props.registerUser(user, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="form">
          <h2 className="registerTitle">Get your free account</h2>

          <form className="registerForm" onSubmit={this.handleSubmit}>
            <input
              className={classnames("registerInput form-control", {
                "is-invalid": errors.name
              })}
              type="text"
              name="name"
              id="name"
              placeholder="First name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}

            <input
              className={classnames("registerInput form-control", {
                "is-invalid": errors.name
              })}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              onChange={this.handleInputChange}
              value={this.state.lastName}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName}</div>
            )}

            <input
              className={classnames("registerInput form-control", {
                "is-invalid": errors.name
              })}
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}

            <input
              className={classnames("registerInput form-control", {
                "is-invalid": errors.name
              })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}

            <input
              className={classnames("registerInput form-control", {
                "is-invalid": errors.name
              })}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              onChange={this.handleInputChange}
              value={this.state.confirmPassword}
            />

            {errors.confirmPassword && (
              <div className="invalid-feedback">{errors.confirmPassword}</div>
            )}

            <Button className="btn btn-primary">Sign Me Up</Button>
          </form>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
