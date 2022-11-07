import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./styles/global.css";

import uuid from 'react-uuid'

export interface ITask {
  id: string;
  taskTitle: string;
  isTaskCompleted: boolean;
}

function App() {
  
  const [tasks, setTasks] = useState([
    {
      id: "01",
      taskTitle: "tarefa 01",
      isTaskCompleted: false
    },
    {
      id: "02",
      taskTitle: "tarefa 02",
      isTaskCompleted: false
    },
    {
      id: "03",
      taskTitle: "tarefa 03",
      isTaskCompleted: true
    },
    {
      id: "04",
      taskTitle: "tarefa 04",
      isTaskCompleted: false
    }

  ]);

  function addTask(taskTitle: string) {
    event.preventDefault();

    setTasks([
      ...tasks, {
        id: uuid(),
        taskTitle: taskTitle,
        isTaskCompleted: false
      } 
    ])
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
 
// criei o estado, e a interface de tasks
// passei o estado pra dentro de Tasks
// e la dentro de tasks continua...