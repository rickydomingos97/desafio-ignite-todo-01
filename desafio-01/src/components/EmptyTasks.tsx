import styles from "./EmptyTasks.module.css";

import Clipboard from "../assets/Clipboard.svg";
export function EmptyTasks() {
  return (
    <>
      <div className={styles.emptyTask}>
        <div className={styles.newTask}>
          <img src={Clipboard} className={styles.icon} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </>
  );
}
