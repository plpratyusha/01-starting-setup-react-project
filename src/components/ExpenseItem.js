import './ExpenseItem.css'; // import css files into this file

// React component code is written basically as a function that returns html code
// special bc it returns jsx code

function ExpenseItem() {
  const expenseDate = new Date(2023, 3, 3);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  // can only return one root element per return statement- use () and wrapping divs to do this
  return (
    <div className="expense-item"> {/* not class bc not html/js, it's jsx */}
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

// export to use this in other files
export default ExpenseItem;
