import './ExpenseItem.css'; // import css files into this file
import ExpenseDate from './ExpenseDate'; // import another component we want to use
import Card from './Card';

// React component code is written basically as a function that returns html code
// special bc it returns jsx code

function ExpenseItem(props) { // instead of parameters, props (key value pairs)
  // const expenseDate = new Date(2023, 3, 3); // some javascript code; html + css are below in the function
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  // don't need these hardcoded values; using expenses array in App.js now with props

  // const month = props.date.toLocaleString('en-US', {month: 'long'});
  // const year = props.date.getFullYear();
  // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  // moving these to a new component for better practice

  // can only return one root element per return statement- use () and wrapping divs to do this
  return (
    <Card className="expense-item"> {/* not class, it's className bc not html/js, it's jsx */}
      <ExpenseDate date2={props.date} /> {/* can use new component here; component tree. use props from App to ExpenseItem to ExpenseDate (the date prop) */}
      <div className="expense-item__description"> 
        <h2>{props.title}</h2> {/* injected constants in html code */}
        <div className="expense-item__price">${props.amount}</div> {/*output $ hard coded*/}
      </div>
    </Card>
  );
}

// export to use this in other files
export default ExpenseItem;
