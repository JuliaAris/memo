import React, { useState } from "react";
import styles from "./ModalEditWord.module.scss";

const ModalEditWord = ({ word, onClose }) => {
  const [editedWord, setEditedWord] = useState({ ...word });
  const [errors, setErrors] = useState({});

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
    const validationErrors = validateInputs(editedWord);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Пожалуйста, исправьте ошибки в форме.");
    } else {
      console.log("Сохраненные изменения:", editedWord);
      onClose(); // Закрываем модальное окно
    }
  };

  const validateInputs = (data) => {
    const errors = {};
    if (!data.english) {
      errors.english = "Поле 'Английское слово' обязательно.";
    }
    if (!data.transcription) {
      errors.transcription = "Поле 'Транскрипция' обязательно.";
    }
    if (!data.russian) {
      errors.russian = "Поле 'Перевод' обязательно.";
    }
    return errors;
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
            style={{ borderColor: errors.english ? "red" : "" }}
          />
          {errors.english && <p className={styles.error}>{errors.english}</p>}

          <label htmlFor="transcription">Транскрипция:</label>
          <input
            type="text"
            id="transcription"
            name="transcription"
            value={editedWord.transcription}
            onChange={handleInputChange}
            required
            style={{ borderColor: errors.transcription ? "red" : "" }}
          />
          {errors.transcription && (
            <p className={styles.error}>{errors.transcription}</p>
          )}

          <label htmlFor="russian">Перевод:</label>
          <input
            type="text"
            id="russian"
            name="russian"
            value={editedWord.russian}
            onChange={handleInputChange}
            required
            style={{ borderColor: errors.russian ? "red" : "" }}
          />
          {errors.russian && <p className={styles.error}>{errors.russian}</p>}

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

// import React, { useState } from "react";
// import styles from "./ModalEditWord.module.scss";

// const ModalEditWord = ({ word, onClose }) => {
//   const [editedWord, setEditedWord] = useState({ ...word });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedWord((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleCancel = () => {
//     // Сброс изменений перед закрытием модального окна
//     setEditedWord({ ...word });
//     onClose();
//   };

//   const handleSave = () => {
//     console.log("Сохранение изменений:", editedWord);
//     // Здесь должна быть логика сохранения измененного слова на сервере
//     onClose();
//   };

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modal}>
//         <h2>Редактирование слова</h2>
//         <button className={styles.closeButton} onClick={onClose}>
//           ×
//         </button>
//         <form>
//           <label htmlFor="english">Английское слово:</label>
//           <input
//             type="text"
//             id="english"
//             name="english"
//             value={editedWord.english}
//             onChange={handleInputChange}
//             required
//           />

//           <label htmlFor="transcription">Транскрипция:</label>
//           <input
//             type="text"
//             id="transcription"
//             name="transcription"
//             value={editedWord.transcription}
//             onChange={handleInputChange}
//             required
//           />

//           <label htmlFor="russian">Перевод:</label>
//           <input
//             type="text"
//             id="russian"
//             name="russian"
//             value={editedWord.russian}
//             onChange={handleInputChange}
//             required
//           />

//           <div className={`${styles.buttonGroup}`}>
//             <button type="button" onClick={handleSave}>
//               Сохранить
//             </button>
//             <button type="button" onClick={handleCancel}>
//               Отмена
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalEditWord;