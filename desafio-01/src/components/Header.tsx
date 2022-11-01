import { PlusCircle } from 'phosphor-react';

import todoLogo from "../assets/todoLogo.svg";

import styles from "../components/Header.module.css";
import { Circle } from "phosphor-react";

export function Header() {
  return (
    
      <header className={styles.header}>
        <img src={todoLogo} />

        <form className={styles.newTaskForm} >
          <input 
            placeholder="Vamos criar o seu lembrete?" />
          <button>
            Criar
            < PlusCircle size={20} />
          </button>
        </form>
      </header>
  );
}