import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { UserContext, ThemeContext } from "./context";
import CONSTANTS from './constants';
const {THEMES} = CONSTANTS;

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: "Elon Musk",
  });
  const themeState = useState(THEMES.DARK);
  
  return (
    <ThemeContext.Provider value={themeState}>
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
