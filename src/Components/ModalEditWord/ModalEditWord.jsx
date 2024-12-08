import React, { useState } from "react";
import styles from "./ModalEditWord.module.scss";

const ModalEditWord = ({ word, onClose }) => {
  const [editedWord, setEditedWord] = useState({ ...word });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWord((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    // Сброс изменений перед закрытием модального окна
    setEditedWord({ ...word });
    onClose();
  };

  const handleSave = () => {
    console.log("Сохранение изменений:", editedWord);
    // Здесь должна быть логика сохранения измененного слова на сервере
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Редактирование слова</h2>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <form>
          <label htmlFor="english">Английское слово:</label>
          <input
            type="text"
            id="english"
            name="english"
            value={editedWord.english}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="transcription">Транскрипция:</label>
          <input
            type="text"
            id="transcription"
            name="transcription"
            value={editedWord.transcription}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="russian">Перевод:</label>
          <input
            type="text"
            id="russian"
            name="russian"
            value={editedWord.russian}
            onChange={handleInputChange}
            required
          />

          <div className={`${styles.buttonGroup}`}>
            <button type="button" onClick={handleSave}>
              Сохранить
            </button>
            <button type="button" onClick={handleCancel}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditWord;
