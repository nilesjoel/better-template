import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const [studioBox, setStudioBox] = useState({});
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  useEffect(() => {
    // useEffect hook call which will be invoked the first time the DOM mount. it is like using componentDidMount in Class Components
    fetchStudioArtData(); // the function that will be called as soon as the DOM mounted
  }, []);

  // Fetch Symmetry Data
  async function fetchStudioArtData() {
    try {
      const studioBox = await axios.get("http://localhost:4700/studioBox");
      const contexts = await axios.get(
        "http://localhost:4700/studioBox/contexts"
      );

      let studioBoxContext = {};
      if (contexts.data && studioBox.data) {
        studioBoxContext = {
          contexts: contexts.data,
          studioBox: studioBox.data
        };
      }
      setStudioBox(studioBoxContext);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(studioBox);
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
