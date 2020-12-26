import './App.css';
import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState(["Take dogs for a walk", "Take the rubbish out"]);
  const [input, setInput] = useState("");


  return (
    <div className="App">
      <h1>Todo App</h1>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
