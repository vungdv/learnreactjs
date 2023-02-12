import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSubmitted = (data) => {
    const newExpense = { ...data, id: Math.random().toString() };
    props.onNewExpense(newExpense);
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSubmitted={onSubmitted} canceled={() => setShowForm(false)}/>
      ) : (
        <button onClick={() => setShowForm(true)}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
