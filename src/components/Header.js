import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
    <h1>expensify</h1>
    <NavLink exact to="/dashboard" activeClassName="is-acitve">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-acitve">
      Create Expense
    </NavLink>
    {/* <NavLink to="/edit" activeClassName="is-acitve">
      Edit Expense
    </NavLink> */}
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProp = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProp
)(Header);
