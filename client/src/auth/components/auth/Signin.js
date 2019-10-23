import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

import bgImage from "../../../assets/muscle.jpg";

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="columns" style={{ minHeight: "75vh" }}>
        <div className="column is-4">
          <div style={{ width: "25vw", marginTop: "25vh" }}>
            <form className="control" onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset>
                <label>Email</label>
                <Field
                  name="email"
                  type="text"
                  component="input"
                  autoComplete="none"
                  className="input is-warning"
                />
              </fieldset>
              <fieldset>
                <label>Password</label>
                <Field
                  name="password"
                  type="password"
                  component="input"
                  autoComplete="none"
                  className="input is-warning"
                />
              </fieldset>
              <div>{this.props.errorMessage}</div>
              <button className="button is-dark" style={{ marginTop: "5px" }}>
                Sign In!
              </button>
            </form>
          </div>
        </div>
        <div
          className="column is-8 bg-image"
          style={{ marginTop: "8vh" }}
        ></div>
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
