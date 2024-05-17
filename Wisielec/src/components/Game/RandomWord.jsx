import React from "react";
import wordsData from "../json/words.json";
import { NavLink } from "react-router-dom";

const RandomWord = () => {
  const getRandomWord = () => {
    const words = wordsData.words;
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const word = getRandomWord();

  return (
    <div>
      <h1>{word}</h1>
      <nav>
        <li>
          <NavLink to="/">
            <a>Home</a>
          </NavLink>
        </li>
      </nav>
    </div>
  );
};

export default RandomWord;
