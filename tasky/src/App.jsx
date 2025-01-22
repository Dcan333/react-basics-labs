import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash them innit" />
      <Task title="Laundry" deadline="Tomorrow" description="Fold and put away">
      </Task>
      <Task title="Tidy" deadline="Today" description="Clean up lil bro" />
    </div>
  );
}

export default App;

