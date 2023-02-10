import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const para = document.createElement("p");
  para.textContent = "Imperative code";
  document.getElementById("root").append(para);
  return (
    <div>
      <h1>Let's get started</h1>
      <p>This is really working!</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
