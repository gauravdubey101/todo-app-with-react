import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    "Revise React Daily",
    "Revise Js Daily",
    "adding few more",
  ]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //it will stop refreshing the page 
    console.log('todo connect');
    setTodos([...todos, input]);
    setInput('');  //clear up the input after hitting submit
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
       

        <FormControl>
        <InputLabel>:Write a todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
  
  
        </FormControl>

        <Button disabled ={!input}  type="submit" onClick={addTodo} variant="contained" color="primary">
        Add todo
</Button>

      {/*   <button  >Add todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text ={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
