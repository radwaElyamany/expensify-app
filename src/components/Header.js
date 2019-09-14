import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>expensify</h1>
    <NavLink exact to="/" activeClassName="is-acitve">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-acitve">
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-acitve">
      Edit Expense
    </NavLink>
  </header>
);


export default Header