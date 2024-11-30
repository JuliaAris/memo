import React from "react";
import styles from "/src/Components/Footer/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Изучение английских слов. Все права
        защищены.
      </p>
    </footer>
  );
};

export default Footer;
