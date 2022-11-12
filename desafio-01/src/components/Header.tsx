import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import todoLogo from "../assets/todoLogo.svg";

import styles from "../components/Header.module.css";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({onAddTask}: Props) {
  const [title, setTitle] = useState("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle(""); // apaga o texto depois de add uma tarefa
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
      <header className={styles.header}>
        <img src={todoLogo} />

        <form 
          className={styles.newTaskForm}
          onSubmit={handleSubmit}
        >
          <input 
            placeholder="Vamos criar o seu lembrete?"
            onChange={onChangeTitle}
            value={title}
            />
          <button>
            Criar
            < PlusCircle size={20} />
          </button>
        </form>
      </header>
  );
}