import './ExpenseItem.css'; // import css files into this file

// React component code is written basically as a function that returns html code
// special bc it returns jsx code

function ExpenseItem(props) { // instead of parameters, props (key value pairs)
  // const expenseDate = new Date(2023, 3, 3); // some javascript code; html + css are below in the function
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  // don't need these hardcoded values; using expenses array in App.js now

  // can only return one root element per return statement- use () and wrapping divs to do this
  return (
    <div className="expense-item"> {/* not class, it's className bc not html/js, it's jsx */}
      <div>{props.date?.toISOString()}</div> 
      <div className="expense-item__description"> 
        <h2>{props.title}</h2> {/* injected constants in html code */}
        <div className="expense-item__price">${props.amount}</div> {/*output $ hard coded*/}
      </div>
    </div>
  );
}

// export to use this in other files
export default ExpenseItem;
