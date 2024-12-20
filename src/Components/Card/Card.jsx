import React, { useState } from "react";
import styles from "/src/Components/Card/Card.module.scss";

const Card = ({ word, isTranslated, onTranslate }) => {
  return (
    <div className={styles.cardsPage}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>{word.russian}</h2>
          <p>{word.transcription}</p>
          <div>
            <button onClick={onTranslate} className={styles.translateButton}>
              {isTranslated ? word.english : "Показать перевод"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
