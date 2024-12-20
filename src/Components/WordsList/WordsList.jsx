import React, { useState } from "react";
import ModalEditWord from "/src/Components/ModalEditWord/ModalEditWord.jsx";
import styles from "/src/Components/WordsList/WordsList.module.scss";

const WordsList = ({ words }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);

  const handleDelete = (wordId) => {
    console.log(`Удаление слова с id: ${wordId}`);
    // Здесь должна быть логика удаления слова с сервера
  };

  const handleEdit = (word) => {
    setSelectedWord(word);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWord(null);
  };

  return (
    <div className={styles.wordsList}>
      <h1>Изучение английских слов</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Английское слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id}>
              <td>{word.english}</td>
              <td>{word.transcription}</td>
              <td>{word.russian}</td>
              <td>
                <button onClick={() => handleEdit(word)}>Редактировать</button>
                <button onClick={() => handleDelete(word.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <ModalEditWord word={selectedWord} onClose={closeModal} />}
    </div>
  );
};

export default WordsList;
