import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import HomePage from "./components/Homepage";
import Waiting from "./components/Waiting";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/waiting" element={<Waiting />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
