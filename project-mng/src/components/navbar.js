import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
          <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
        </a>
        <Link to="/" className="navbar-brand">Project MNG</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/todos/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/todos/create" className="nav-link">Create Todo</Link>
            </li>
            <li className="navbar-item">
              <Link to="/register" className="nav-link">Sign Up</Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link">Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar;