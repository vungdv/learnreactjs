import './ExpenseDate.css';

function ExpenseDate(props) {
    const year = props.date !== undefined? props.date.toLocaleDateString('en-US', { year: 'numeric' }): '';
    const month = props.date !== undefined? props.date.toLocaleDateString('en-US', { month: '2-digit' }): '';
    const day = props.date !== undefined? props.date.getFullYear(): '';
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;