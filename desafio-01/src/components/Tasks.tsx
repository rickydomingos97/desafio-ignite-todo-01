import { ITask } from "../App";
import { Task } from "./Task";
import styles from "./Tasks.module.css";
import uuid from "react-uuid";
// passsei as tasks pra dentro de task por props,
// e determinei que Props recebe tasks que eh um array de ITask
interface Props {
  tasks: ITask[];
  onDelete: (task: string) => void; // crio uma funcao onde task eh uma string e nao devolve algo
  onComplete: (task: string) => void;
}

// add o onDelete nessa function e mando o ondelete pra Task tbm la embaixo

export function Tasks({ tasks , onDelete, onComplete} : Props) {
  // contador de tarefas adicionadas
  const tasksCounter = tasks.length;
  // contador de tarefas concluidas
  const completedTasks = tasks.filter((task) => task.isTaskCompleted).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksCounter}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{completedTasks} de {tasksCounter}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map(task => (
          <Task 
          key={task.id}  
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
          />
          
        ))}
      </div>
    </section>
  );
}
// nao esquecer a key do array de tasks