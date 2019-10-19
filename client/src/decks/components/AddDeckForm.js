import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import * as DeckActions from "../actions/decksActions";

class AddDeckForm extends Component {
  onSubmit = formProps => {
    this.props.addDeck(formProps);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container" style={{ width: "350px", height: "400px" }}>
        <div class={`modal ${this.props.modalState}`}>
          <div class="modal-background"></div>
          <header class="modal-card-head">
            <p class="modal-card-title">Add Deck</p>
          </header>
          <div class="modal-content" style={{ width: "25vw", height: "35vh" }}>
            <div>
              <form
                className="control"
                onSubmit={() => handleSubmit(this.onSubmit)}
              >
                <fieldset>
                  <label>Deck Title</label>
                  <Field
                    name="title"
                    type="text"
                    component="input"
                    autoComplete="none"
                    className="input is-warning"
                  />
                </fieldset>
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
                  onClick={this.props.onToggleModal()}
                >
                  Add Deck
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
    DeckActions
  )
  //   reduxForm({ form: "addDeck" })
)(AddDeckForm);
