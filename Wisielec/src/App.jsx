import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutAuthor from "./components/Home/AboutAuthor";
import Home from "./components/Home/Home";
//import Game from "./components/Game/Game";
import RandomWord from "./components/Game/RandomWord";
//tymczasowo będe pod /game wyświetlał randomWord, ale potem będzie wyświetlane w Game :D
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutAuthor" element={<AboutAuthor />} />
        <Route path="/Game" element={<RandomWord />} />
      </Routes>
    </>
  );
}
