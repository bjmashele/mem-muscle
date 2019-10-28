import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import history from "../../history";
import * as DeckActions from "../actions/decksActions";

class AddDeckForm extends Component {
  constructor() {
    super();
    this.state = {
      modalState: "is-active"
    };
  }

  toggleModal = () => {
    const getModalState = () => {
      if (this.state.modalState == " ") {
        return "is-active";
      } else {
        return " ";
      }
    };
    this.setState({
      modalState: getModalState()
    });
  };

  onSubmit = formProps => {
    this.props.addDeck(formProps, console.log("Added a card"));
    this.toggleModal();
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container ">
        <div className={`modal ${this.state.modalState}`}>
          <div className="modal-background"></div>

          <div
            className="modal-content columns is-centered is-text-centered"
            style={{ width: "35vw", height: "50vh", textAlign: "center" }}
          >
            <div>
              <div className="title is-4 text-is-centered"> Create a Deck</div>
              <form
                className="control modal-form "
                onSubmit={handleSubmit(this.onSubmit)}
              >
                <fieldset>
                  <label>Enter Deck Title</label>
                  <Field
                    name="title"
                    type="text"
                    component="input"
                    autoComplete="none"
                    className="input is-primary"
                  />
                </fieldset>
                <hr style={{ lineWidth: "3px" }} />
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
                  <button className="button is-warning">Add Deck</button>
                </div>
              </form>
            </div>
          </div>
          <button
            class="modal-close is-large"
            aria-label="close"
            onClick={this.toggleModal}
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
  ),
  reduxForm({ form: "addDeck" })
)(AddDeckForm);
