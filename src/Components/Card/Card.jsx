import React, { useState } from "react";
import styles from "/src/Components/Card/Card.module.scss";

const Card = ({ word, isTranslated, onTranslate }) => {
  return (
    <div className={styles.card}>
      <h2>{isTranslated ? word.russian : word.english}</h2>
      <p>{word.transcription}</p>
      <button onClick={onTranslate} className={styles.translateButton}>
        {isTranslated ? "Показать перевод" : "Показать перевод"}
      </button>
    </div>
  );
};

export default Card;
