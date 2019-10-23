import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import * as DecksActions from "../actions/DecksActions";

class AddCardForm extends Component {
  onSubmit = formProps => {
    formProps["id"] = this.props.deckID;
    {
      console.log("In add-Card comp", formProps);
    }
    formProps["deckID"] = this.props.deckID;
    this.props.addCard(formProps, () => {
      console.log("addCard callback");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container" style={{ width: "350px", height: "400px" }}>
        <div class={`modal ${this.props.modalState}`}>
          <div class="modal-background"></div>
          <header class="modal-card-head">
            <p class="modal-card-title">Add Card</p>
          </header>
          <div class="modal-content" style={{ width: "25vw", height: "35vh" }}>
            <div>
              <form className="control" onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                  <label>Question</label>
                  <Field
                    name="question"
                    type="text"
                    component="input"
                    autoComplete="none"
                    className="input is-warning"
                  />
                </fieldset>
                <fieldset>
                  <label>Answer</label>
                  <Field
                    name="answer"
                    type="text"
                    component="input"
                    autoComplete="none"
                    className="input is-warning"
                  />
                </fieldset>

                <button
                  className="button is-dark"
                  style={{ marginTop: "5px" }}
                  //   onClick={this.props.onToggleModal()}
                >
                  {/* <Link to="feature">Add Card</Link> */}
                  Add Card
                </button>
              </form>
            </div>
          </div>
          <button
            class="modal-close is-large"
            aria-label="close"
            onClick={this.props.onToggleModal()}
          ></button>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    DecksActions
  ),
  reduxForm({ form: "addCard" })
)(AddCardForm);
