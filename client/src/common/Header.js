import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-dark">
              <Link to="/signout">Sign Out</Link>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-item">
          <div className="buttons">
            <a>
              <Link
                to="/signup"
                style={{
                  color: "#1b120f",
                  fontWeight: "bold",
                  paddingRight: "10px"
                }}
              >
                Sign Up
              </Link>
            </a>
            <a>
              <Link
                to="/signin"
                style={{ color: "#1b120f", fontWeight: "bold" }}
              >
                Sign In
              </Link>
            </a>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container" style={{ width: "100vw" }}>
        <nav
          className="navbar is-warning"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item">
              <Link to="/">Memrily</Link>
            </a>
          </div>
          <div className="navbar-menu">
            <div class="navbar-start"></div>
            <div className="navbar-end"></div>
            {this.renderLinks()}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
