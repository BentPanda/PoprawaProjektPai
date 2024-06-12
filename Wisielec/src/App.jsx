import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutAuthor from "./components/Home/AboutAuthor";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutAuthor" element={<AboutAuthor />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </>
  );
}
