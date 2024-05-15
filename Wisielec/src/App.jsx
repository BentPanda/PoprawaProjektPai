import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutAuthor from "../src/Home/AboutAuthor";
import Home from "../src/Home/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutAuthor" element={<AboutAuthor />} />
        <Route path="/Game" element={<AboutAuthor />} />
      </Routes>
    </>
  );
}
