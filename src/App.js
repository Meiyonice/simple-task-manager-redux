import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "./features/taskSlice";

function App() {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");

  // redux
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  // add task
  const handleAddTask = () => {
    if (task.trim() === "") {
      setMessage("Please enter a task");
      return;
    }

    dispatch(addTask(task));
    setTask("");
    setMessage("");
  };

  // remove task
  const handleRemoveTask = (index) => {
    dispatch(removeTask(index));
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Simple Task Manager</h1>

        <div className="inputArea">
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        <p className="message">{message}</p>

        <div className="taskList">
          <h2>Tasks</h2>

          {tasks.length === 0 ? (
            <p className="emptyState">No tasks yet</p>
          ) : (
            tasks.map((item, index) => (
              <div className="taskItem" key={index}>
                <p>{item}</p>

                <button
                  className="removeBtn"
                  onClick={() => handleRemoveTask(index)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
