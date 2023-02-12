import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const changedYearHandler = (year) => {
    setSelectedYear(year);
    setFilteredExpenses(
      props.items.filter(
        (expense) => expense.date.getFullYear().toString() === year
      )
    );
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangedYear={changedYearHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}
