import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div
            className="navbar-brand"
            style={{ color: "#f9f9f9", textDecoration: "bold" }}
          >
            MemMuscle
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.isAuth ? <Link to="/">Log out</Link> : ""}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.authenticated
});

export default connect(
  mapStateToProps,
  null
)(Header);
