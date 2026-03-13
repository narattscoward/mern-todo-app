import React, { useState } from "react";
import "./App.css";

const Create = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    const trimmed = task.trim();
    if (!trimmed) return;

    addTodo(trimmed);
    setTask("");
  };

  return (
    <main>
      <h1>Todo List</h1>
      <div className="create-form">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button onClick={handleAdd}>ADD</button>
      </div>
    </main>
  );
};

export default Create;