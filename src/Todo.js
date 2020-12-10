import {  List,ListItem, ListItemText } from "@material-ui/core";
import './Todo.css'
import React from "react";
/* import db from './firebase'; */


 function Todo(props) {
  //props = properties
  return (
    <List className="todo__list">
        <ListItem>
          
            <ListItemText primary={props.text} secondary="Dummy Lines" />
        </ListItem>
{/*         <Button onClick = {event => db.collection('todo').doc(props.todo.id).delete()}
    >Delete Me</Button> */}
    </List>
  )
}

export default Todo