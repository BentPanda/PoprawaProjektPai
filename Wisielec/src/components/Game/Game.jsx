import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import RandomWord from "./RandomWord";
import "./Game.scss";
import mistake0 from "../../assets/HangmanPhotos/Wisielec9.png";
import mistake1 from "../../assets/HangmanPhotos/Wisielec8.png";
import mistake2 from "../../assets/HangmanPhotos/Wisielec7.png";
import mistake3 from "../../assets/HangmanPhotos/Wisielec6.png";
import mistake4 from "../../assets/HangmanPhotos/Wisielec5.png";
import mistake5 from "../../assets/HangmanPhotos/Wisielec4.png";
import mistake6 from "../../assets/HangmanPhotos/Wisielec3.png";
import mistake7 from "../../assets/HangmanPhotos/Wisielec2.png";
import mistake8 from "../../assets/HangmanPhotos/Wisielec1.png";

const images = [
  mistake0,
  mistake1,
  mistake2,
  mistake3,
  mistake4,
  mistake5,
  mistake6,
  mistake7,
  mistake8,
];

const Game = () => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const navigate = useNavigate();

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter) && mistakes < 8) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) setMistakes(mistakes + 1);
    }
  };

  const renderWord = () =>
    word.split("").map((letter, i) => (
      <span key={i} className="letter">
        {guessedLetters.includes(letter) ? letter : "_"}
      </span>
    ));

  const renderKeyboard = () =>
    "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        onClick={() => handleGuess(letter)}
        disabled={guessedLetters.includes(letter)}
      >
        {letter}
      </button>
    ));

  return (
    <div className="Game">
      <h1>Wisielec</h1>
      {!gameStarted ? (
        <RandomWord setWord={setWord} setGameStarted={setGameStarted} />
      ) : (
        <>
          <img src={images[mistakes]} />
          <div className="word">{renderWord()}</div>
          <div className="keyboard">{renderKeyboard()}</div>
          <div className="mistakes">Błendy: {mistakes}</div>
          <button className="homeButton" onClick={() => navigate("/")}>
            Powrót do Mainpage'a
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
