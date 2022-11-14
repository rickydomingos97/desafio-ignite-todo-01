import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./styles/global.css";

import uuid from 'react-uuid'

//salvando no localstorage:
const LOCAL_STORAGE_KEY = "todo:savedTasks";

export interface ITask {
  id: string;
  taskTitle: string;
  isTaskCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);


  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
      if(savedTasks) {
        setTasks(JSON.parse(savedTasks)); //converte json para array
      }
  }
 //chamando a funcao uma vez que a pagina carregar
  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: ITask[]): void {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks)); // converte array para Json
  }

  function addTask(taskTitle: string) {
    event.preventDefault();

    setTasksAndSave([
      ...tasks, 
      {
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
    setTasksAndSave(newTasks)
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
    setTasksAndSave(newTasks);
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