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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
  //props = properties
  const [open,setOpen] = useState(fasle);
  const handleOpen = () =>{
      setOpen(true);  
  };
  
  return (
      <>
        <Modal
  open={open}
  onClose={e =>setOpen(false)}
>
  
</Modal>

    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>

        <ListItemText primary={props.todo.todo} secondary="Dummy Lines" />
      </ListItem>
              <DeleteForeverIcon onClick = {event => db.collection('todos').doc(props.todo.id).delete()}/>  
              
    
    </List>
    </>
  )
}

export default Todo
