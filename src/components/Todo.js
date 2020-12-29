import { List, ListItem, ListItemSecondaryAction, ListItemText, IconButton, Grid } from "@material-ui/core";
import { Delete } from "@material-ui/icons"
import React from "react";
import db from "../firebase";

function Todo(props) {
  return (
    <Grid item xs={12} sm={8} md={6}> {/* I couldn't decide on what breakpoint to use */}
      <List>
        <ListItem>
          <ListItemText primary={props.todo.todo}/>
          <ListItemSecondaryAction>
            <IconButton onClick={e => {db.collection("todos").doc(props.todo.id).delete()}} edge="end">
              <Delete color="primary" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Grid>
  );
}

export default Todo;
