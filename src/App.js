import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem></ExpenseItem> {/* // can use component as html element- just capitalize */}
    </div>
  );
}

export default App;
