import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <div className='todoList'>
          <h3>Things to do:</h3>
          <div>
            <input className='input'/>
            <button className='addTaskButton'>+</button>
          </div>
          <ul>
            <li><input type="checkbox" checked={true}/> <span>Study</span></li>
            <li><input type="checkbox" checked={true}/> <span>Eat</span></li>
            <li><input type="checkbox" checked={false}/> <span>Sleep</span></li>
          </ul>
          <div className='fButtons'>
            <button className='filterButton'>All</button>
            <button className='filterButton'>Active</button>
            <button className='filterButton'>Completed</button>
          </div>
        </div>
      </div>
  );
}

export default App;
