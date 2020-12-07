import React from 'react';
import './App.css';
import Todo from '../src/components/Todo';

function App() {
  return (
    <div className="App">
        <div className="centerDiv">
        <h1>Emily's To Do App</h1>
        <Todo />
        <p>“I recommend that you look at the tasks you are doing throughout your day and ask yourself if these things are bringing you closer to your goals?”
― Richie Norton</p>
        </div>
    </div>
  );
}

export default App;