import React, { useEffect } from "react";
import wordsData from "../json/words.json";

const RandomWord = ({ setWord, setGameStarted }) => {
  useEffect(() => {
    const getRandomWord = () => {
      const words = wordsData.words;
      const randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
    };
    setWord(getRandomWord());
    setGameStarted(true);
  }, [setWord, setGameStarted]);

  return <></>;
};

export default RandomWord;
