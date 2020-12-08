import {  List,ListItem, ListItemText } from "@material-ui/core";
import './Todo.css'
import React from "react";


 function Todo(props) {
  //props = properties
  return (
    <List className="todo__list">
        <ListItem>
          
            <ListItemText primary={props.text} secondary="Dummy Lines" />
        </ListItem>
    </List>
  )
}

export default Todo