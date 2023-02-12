import React, { useState } from "react";

import logo from "./logo.svg";
// import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseItems, setExpenseItems] = useState(expenses);
  const addExpenseHandler = (expense) => {
    setExpenseItems((prevExpenseItems) => {
      return [expense, ...prevExpenseItems];
    });
  };

  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onNewExpense={addExpenseHandler} />
      <Expenses items={expenseItems} />
    </div>
  );
}

export default App;
