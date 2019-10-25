import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import history from "../../history";
import * as DecksActions from "../actions/DecksActions";

class AddCardForm extends Component {
  onSubmit = formProps => {
    formProps["id"] = this.props.deckID;

    formProps["deckID"] = this.props.deckID;
    this.props.addCard(formProps, () => {
      history.push("/card-list");
      console.log("added a deck");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container ">
        <div className={`modal ${this.props.modalState}`}>
          <div className="modal-background"></div>

          <div
            className="modal-content columns is-centered is-text-centered"
            style={{ width: "35vw", height: "40vh", textAlign: "center" }}
          >
            <div>
              <div className="title is-4 text-is-centered"> Add a Card</div>
              <form
                className="control modal-form "
                onSubmit={handleSubmit(this.onSubmit)}
              >
                <fieldset>
                  <label>Enter Question</label>
                  <Field
                    name="question"
                    type="text"
                    component="input"
                    autoComplete="none"
                    className="input is-warning"
                  />
                </fieldset>
                <fieldset>
                  <label>Enter Answer</label>
                  <Field
                    name="answer"
                    type="text"
                    component="input"
                    autoComplete="none"
                    className="input is-warning"
                  />
                </fieldset>

                <div style={{ marginTop: "10px" }}>
                  <button className="button is-warning">Add Card</button>
                </div>
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
