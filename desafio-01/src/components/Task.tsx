import { Trash } from "phosphor-react";
import { ITask } from "../App";
import styles from "./Task.module.css";

interface Props {
  task: ITask;
}

export function Task( { task }: Props ) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>
        {task.taskTitle}
        {task.isTaskCompleted}
      </p>

      <button className={styles.delete}>
        <Trash size={24} />
      </button>
    </div>
  );
}
