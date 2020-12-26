import React, { useContext } from "react";
import { useTheme, useThemeUpdate } from "./themeContext";

export default function SimplifiedComponent() {
  const darkTheme = useTheme();
  const toggleUpdate = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem"
  };
  return (
    <>
      <button onClick={toggleUpdate}>Toggle Theme</button>
      <div style={themeStyles}> Function Theme </div>
    </>
  );
}
