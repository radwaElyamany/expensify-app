import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const LoadingPage = props => {
  return (
    <div className='loader'>
      <img className='loader__image' src="/images/loader.gif" />
    </div>
  );
};

export default LoadingPage;
