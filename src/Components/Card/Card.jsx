import React, { useRef, useEffect, useState } from "react";
import styles from "/src/Components/Card/Card.module.scss";

const Card = ({
  word,
  onTranslate,
  isTranslated,
}) => {
 
  const [viewedCards, setViewedCards] = useState([]); // Состояние для хранения изученных карточек
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  const handleCheck = () => {
    if (!viewedCards.includes(word.id)) {
      setViewedCards((prevViewedCards) => [...prevViewedCards, word.id]); // Добавление ID карточки в массив
    }
    onTranslate(); // Вызов функции проверки перевода
  };

  return (
    <div className={styles.cardsPage}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>{word.russian}</h2>
          <p>{word.transcription}</p>
          <div>
            <button
              ref={buttonRef}
              onClick={handleCheck}
              className={styles.translateButton}
            >
              {isTranslated ? word.english : "Показать перевод"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
