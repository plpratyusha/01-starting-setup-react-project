import './ExpenseDate.css';

/* custom component; used to split large to smaller components */

function ExpenseDate(props) {
    const month = props.date2.toLocaleString('en-US', { month: 'long' });
    const year = props.date2.getFullYear();
    const day = props.date2.toLocaleString('en-US', { day: '2-digit' });

    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div> /* instead of displaying date like this {props.date?.toISOString()}, display month/year/day */
    );
}

export default ExpenseDate;