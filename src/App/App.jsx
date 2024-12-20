import "./App.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "/src/Components/Header/Header.jsx";
import Footer from "/src/Components/Footer/Footer.jsx";
import WordsList from "/src/Components/WordsList/WordsList.jsx";
import AddWordForm from "/src/Components/AddWordForm/AddWordForm.jsx";
import Card from "/src/Components/Card/Card.jsx";
import Buttons from "/src/Components/Buttons/Buttons.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTranslated, setIsTranslated] = useState(false);
  const [error, setError] = useState(null);

  // Объединенный useEffect для получения данных
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://itgirlschool.justmakeit.ru/api/words"
        );
        setWords(response.data);
      } catch (error) {
        setError(error.message || "Ошибка загрузки данных");
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!words.length) {
    return <div>Загрузка...</div>;
  }

  const handleNext = () => {
    console.log("Before next:", currentIndex);
    setCurrentIndex((currentIndex + 1) % words.length);
    setIsTranslated(false);
    console.log("After next:", currentIndex);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? words.length - 1 : currentIndex - 1);
    setIsTranslated(false);
  };

  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };

  const addWord = async (newWord) => {
    try {
      const response = await axios.post(
        "https://itgirlschool.justmakeit.ru/api/words",
        newWord
      );
      setWords([...words, response.data]);
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  const deleteWord = async (wordId) => {
    try {
      await axios.delete(
        `https://itgirlschool.justmakeit.ru/api/words/${wordId}`
      );
      setWords(words.filter((word) => word.id !== wordId));
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  };

  const editWord = async (updatedWord) => {
    try {
      const response = await axios.put(
        `https://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}`,
        updatedWord
      );
      setWords(
        words.map((word) => (word.id === updatedWord.id ? response.data : word))
      );
    } catch (error) {
      console.error("Error updating word:", error);
    }
  };

  const Home = () => {
    return (
      <>
        {<WordsList words={words} onDelete={deleteWord} onEdit={editWord} />}
        {<AddWordForm onSubmit={addWord} />}
      </>
    );
  };

  const GamePage = () => {
    return (
      <>
        {<Buttons handlePrevious={handlePrevious} handleNext={handleNext} />}
        {
          <Card
            word={words[currentIndex]}
            isTranslated={isTranslated}
            onTranslate={toggleTranslation}
          />
        }
      </>
    );
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/gamepage" element={<GamePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
