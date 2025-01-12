// import React, { useState } from "react";
// import styles from "./AddWordForm.module.scss";

// const AddWordForm = ({ onSubmit }) => {
//   const [english, setEnglish] = useState("");
//   const [transcription, setTranscription] = useState("");
//   const [russian, setRussian] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!english || !transcription || !russian) return;
//     onSubmit({ english, transcription, russian });
//     setEnglish("");
//     setTranscription("");
//     setRussian("");
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <label htmlFor="english">Английское слово:</label>
//       <input
//         type="text"
//         id="english"
//         value={english}
//         onChange={(e) => setEnglish(e.target.value)}
//         required
//       />

//       <label htmlFor="transcription">Транскрипция:</label>
//       <input
//         type="text"
//         id="transcription"
//         value={transcription}
//         onChange={(e) => setTranscription(e.target.value)}
//         required
//       />

//       <label htmlFor="russian">Перевод:</label>
//       <input
//         type="text"
//         id="russian"
//         value={russian}
//         onChange={(e) => setRussian(e.target.value)}
//         required
//       />

//       <button type="submit">Добавить слово</button>
//     </form>
//   );
// };

//  export default AddWordForm;
import React, { useState } from "react";
import styles from "./AddWordForm.module.scss";

const AddWordForm = ({ onSubmit }) => {
  // Добавляем состояние для хранения ошибок
  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
  });

  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setRussian] = useState("");

  const handleInputChange = (field, value) => {
    switch (field) {
      case "english":
        setEnglish(value);
        break;
      case "transcription":
        setTranscription(value);
        break;
      case "russian":
        setRussian(value);
        break;
      default:
        break;
    }

    // Проверяем все поля после каждого изменения
    validateFields();
  };

  const validateFields = () => {
    let newErrors = {};
    if (!english.trim()) {
      newErrors.english = true;
    } else {
      newErrors.english = false;
    }
    if (!transcription.trim()) {
      newErrors.transcription = true;
    } else {
      newErrors.transcription = false;
    }
    if (!russian.trim()) {
      newErrors.russian = true;
    } else {
      newErrors.russian = false;
    }
    setErrors(newErrors);
  };

  const isValid = Object.values(errors).every((error) => !error);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onSubmit({ english, transcription, russian });
    setEnglish("");
    setTranscription("");
    setRussian("");
    setErrors({
      english: false,
      transcription: false,
      russian: false,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="english">Английское слово:</label>
      <input
        type="text"
        id="english"
        value={english}
        onChange={(e) => handleInputChange("english", e.target.value)}
        style={{ borderColor: errors.english ? "red" : "" }}
        required
      />

      <label htmlFor="transcription">Транскрипция:</label>
      <input
        type="text"
        id="transcription"
        value={transcription}
        onChange={(e) => handleInputChange("transcription", e.target.value)}
        style={{ borderColor: errors.transcription ? "red" : "" }}
        required
      />

      <label htmlFor="russian">Перевод:</label>
      <input
        type="text"
        id="russian"
        value={russian}
        onChange={(e) => handleInputChange("russian", e.target.value)}
        style={{ borderColor: errors.russian ? "red" : "" }}
        required
      />

      <button type="submit" disabled={!isValid}>
        Добавить слово
      </button>
    </form>
  );
};

export default AddWordForm;
