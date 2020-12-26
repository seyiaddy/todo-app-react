import './App.css';
import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState(["Take dogs for a walk", "Take the rubbish out"]);
  

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input type="text"/>
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
