import React from "react";
import styles from "/src/Components/Header/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>MEMORY</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/words">Слова</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
