import { Task } from './Task'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>10</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>0 de 10</span>
        </div>
      </header>

      <div className={styles.list}>
        <Task />
        <Task />
        <Task />
      </div>
    </section>
  )
}