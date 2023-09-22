"use client";
import "./page.css";
import { useState } from "react";

export default function Home() {
  const [inputval, setInputval] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const saveTodo = () => {
    setTodos([...todos, inputval]);
    setInputval("");
  };

  const clearTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i != index);
    setTodos(updatedTodos);
  };
  return (
    <div className="landing">
      <h2>To Do App</h2>

      <div className="todoCard">
        <label>Enter ToDo</label>
        <input onChange={(e) => setInputval(e.target.value)} type="text" />
        <button onClick={saveTodo}>Save Todo</button>
      </div>

      <div className="yourTodo">
        <h1>Your ToDo</h1>
        <div className="todoItems">
          <ul>
            {todos.map((todo, i) => (
              <div className="todoItem">
                <li key={i}>{todo}</li>
                <button onClick={() => clearTodo(i)}> clear todo</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
