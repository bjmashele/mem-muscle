import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className="navbar-end">
          <a className="navbar-item button is-dark" style={{marginRight:"10px"}}>
          <Link to="/signout">Sign Out</Link>
          </a>
          {/* <a className="navbar-item button is-light">
          <Link to="/feature">Feature</Link>
          </a> */}
        </div>
      );
    } else {
      return (
        <div className="navbar-end">
          <a className="navbar-item button is-dark" style={{marginRight:"10px"}}>
          <Link to="/signup">Sign Up</Link>
          </a>
          <a className="navbar-item button is-light">
          <Link to="/signin">Sign In</Link>
          </a>
        </div>
      );
    }
  }

  render() {
    return (
        <div>
      <nav className="navbar is-warning">
          <div className="cont" style={{paddingTop:"8px"}}>
          <div className="navbar-menu">
              <div className="navbar-start">
                  <a className="navbar-item">
                      <Link to="/">Memrily</Link>
                  </a>
               </div> 
              <div className="navss">
                {this.renderLinks()}
             </div>
          </div>
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
