import React, { useState } from "react";
import styles from "./AddWordForm.module.scss";

const AddWordForm = ({ onSubmit }) => {
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setRussian] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!english || !transcription || !russian) return;
    onSubmit({ english, transcription, russian });
    setEnglish("");
    setTranscription("");
    setRussian("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="english">Английское слово:</label>
      <input
        type="text"
        id="english"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
        required
      />

      <label htmlFor="transcription">Транскрипция:</label>
      <input
        type="text"
        id="transcription"
        value={transcription}
        onChange={(e) => setTranscription(e.target.value)}
        required
      />

      <label htmlFor="russian">Перевод:</label>
      <input
        type="text"
        id="russian"
        value={russian}
        onChange={(e) => setRussian(e.target.value)}
        required
      />

      <button type="submit">Добавить слово</button>
    </form>
  );
};

export default AddWordForm;
