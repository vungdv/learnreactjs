import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: event.target[0].value,
      amount: event.target[1].value,
      date: new Date(event.target[2].value),
    };

    props.onSubmitted(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input type="number" min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" />
          </div>
          <div className="new-expense__actions">
            <button onClick={props.canceled}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
