import React, { useState } from "react";
import TypicalComponent from "./TypicalComponent";
import "../styles.css";

export const ThemeContext = React.createContext();

export default function Typical() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <TypicalComponent />
    </ThemeContext.Provider>
  );
}
