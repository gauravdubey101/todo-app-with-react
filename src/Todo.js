import React from "react";


import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button
} from "@material-ui/core";
import "./Todo.css";
import db from './firebase';

function Todo(props) {
  //props = properties
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>

        <ListItemText primary={props.todo.todo} secondary="Dummy Lines" />
      </ListItem>
              <Button onClick = {event => db.collection('todos').doc(props.todo.id).delete()}
    >Delete Me</Button>
    </List>
  )
}

export default Todo
