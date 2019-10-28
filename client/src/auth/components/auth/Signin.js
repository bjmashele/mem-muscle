import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div style={{ minHeight: "95vh", backgroundColor: "white" }}>
        <div className="subtitle memmuscle-text">
          Brain workouts one flash card at a time
        </div>
        <div className="columns">
          <div className="column is-4">
            <div
              style={{ width: "25vw", marginTop: "25vh", paddingLeft: "5vw" }}
            >
              <form className="control" onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                  <label>Email</label>
                  <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                    className="input is-dark"
                  />
                </fieldset>
                <fieldset>
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                    className="input is-dark"
                  />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button className="button is-dark" style={{ marginTop: "5px" }}>
                  Sign In!
                </button>
              </form>
              <hr />
              <div className="register" style={{ textAlign: "center" }}>
                Sign up <Link to="/signup">here</Link>
                <br />
                Or signin as a guest [email: guest@mail.com, password: guest]
              </div>
            </div>
          </div>
          <div
            className="column is-8 bg-image"
            style={{ marginTop: "8vh" }}
          ></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signin" })
)(Signin);
