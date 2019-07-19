import React from "react";
import "./App.css";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
