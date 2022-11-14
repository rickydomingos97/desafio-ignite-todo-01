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
      isTaskCompleted: true
    },
    {
      id: "02",
      taskTitle: "tarefa 02",
      isTaskCompleted: true
    },
    {
      id: "03",
      taskTitle: "tarefa 03",
      isTaskCompleted: true
    },
    {
      id: "04",
      taskTitle: "tarefa 04",
      isTaskCompleted: true
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

  // function pra deletar se o id for igual a task que voce selecionou
  // e no final cria uma nova array com as tasks que nao foram deletadas

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks)
    console.log(taskId)
  }
  // pego o ondelete e mando pra dentro de Tasks

  function toogleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        return {
          ...task,
          isTaskCompleted: !task.isTaskCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTaskById}
        onComplete={toogleTaskCompletedById}
        />
    </>
  );
}

export default App;
 
// criei o estado, e a interface de tasks
// passei o estado pra dentro de Tasks
// e la dentro de tasks continua...