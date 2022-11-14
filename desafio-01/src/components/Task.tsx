import { CheckCircle, Trash } from "phosphor-react";
import { ITask } from "../App";
import styles from "./Task.module.css";

interface Props {
  task: ITask
  onDelete: (taskId: string) => void; // add aqui e mando pra dentro de Task e envio para o botao de trash
  onComplete: (taskId: string) => void;
}

export function Task( { task, onDelete, onComplete }: Props ) {

  //const isCompleted = true;

  return (
    <div className={styles.task}>
      <button
        
        className={styles.checkContainer}

        onClick={() => onComplete(task.id)}
        >
          {task.isTaskCompleted ?  <CheckCircle size={24} color="#5E60CE" weight="bold" /> : < div /> }       
      </button>

      <p className={task.isTaskCompleted ? styles.textCompleted : ""}>
        {task.taskTitle}
        {task.isTaskCompleted}
      </p>

      <button className={styles.delete} onClick={() => onDelete(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
