import React from "react";
import { Button } from "antd";
import "./App.css";

const tasks = [
  {
    task: "Домашка по React",
    date: "10.02.2025",
    complited: false,
    id: 1,
  },
  {
    task: "Дочитать книгу 'К востоку от Эдемв' ",
    date: "16.02.2025",
    complited: true,
    id: 2,
  },
  {
    task: "Сходить на маникюр",
    date: "14.01.2025",
    complited: false,
    id: 3,
  },
];

const App = () => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-card ${task.complited ? "completed" : ""}`}
        >
          <h3>{task.task}</h3>
          <p>{task.date}</p>
          <p>Номер задачи: {task.id}</p>
          {!task.complited && <Button>Done</Button>}
        </div>
      ))}
    </div>
  );
};

export default App;