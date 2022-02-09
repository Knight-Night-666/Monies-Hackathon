import React, { Component } from 'react';

class Navbar extends Component {
    render() {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            >
            Marketplace
            </a>
            <ul className="navbar-nav px-3">
            <li className="nav-item">
                {this.props.account}
            </li>
            </ul>
        </nav>
    );
  }
}

export default Navbar;