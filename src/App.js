import "./App.css";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Button, FormControl, InputLabel, Input, Grid } from "@material-ui/core";
import Todo from "./components/Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads, we listen to the database and fetch new todos
  useEffect(() => {
    // this code here runs when the app loads
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault(); // to prevent the page from reloading

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput(""); // clear the input after clicking the add todo button
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        <Grid container justify="center">
          {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
        </Grid>
      </ul>
    </div>
  );
}

export default App;
