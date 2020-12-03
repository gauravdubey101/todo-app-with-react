
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Revise React Daily','Revise Js Daily','adding few more']);
  const [input, setInput] = useState('');

  const addTodo = (event) =>{
    //this will fire off when we click the button
    setTodos([...todos,input])
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick= {addTodo}>Add todo</button>

      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
