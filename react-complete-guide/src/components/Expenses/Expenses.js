import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
export default function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                date={props.items[0].date}
                title={props.items[0].title}
                amount={props.items[0].amount}
            />
        </Card>
    );
}