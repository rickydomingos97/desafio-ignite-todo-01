import { Trash } from "phosphor-react";
import { ITask } from "../App";
import styles from "./Task.module.css";

interface Props {
  task: ITask
  onDelete: (taskId: string) => void; // add aqui e mando pra dentro de Task e envio para o botao de trash
}

export function Task( { task, onDelete }: Props ) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>
        {task.taskTitle}
        {task.isTaskCompleted}
      </p>

      <button className={styles.delete} onClick={() => onDelete(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
