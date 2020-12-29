import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  Input,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import React, { useState } from "react";
import db from "../firebase";

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.todo);

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set({
      todo: input,
    }, {merge: true})
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  }

  const handleDialogClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Update Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type in the new value of todo item
          </DialogContentText>
          <Input type="text" value={input} onKeyUp={e => {if (e.key === "Enter") updateTodo()}} onChange={e => setInput(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={updateTodo}>Update</Button>
        </DialogActions>
      </Dialog>
      <Grid item xs={12} sm={8} md={6}> {/* I couldn't decide on what breakpoint to use */}
        <List>
          <ListItem>
            <ListItemText primary={props.todo.todo} />
            <ListItemSecondaryAction>
              <IconButton onClick={handleDialogOpen}>
                <Edit color="primary" />
              </IconButton>
              <IconButton
                onClick={(e) => {
                  db.collection("todos").doc(props.todo.id).delete();
                }}
              >
                <Delete color="error" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Grid>
    </>
  );
}

export default Todo;
