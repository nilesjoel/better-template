import React from "react";
import SimplifiedComponent from "./SimplifiedComponent";
import "../styles.css";
import { ThemeProvider } from "../themeContext";

export const ThemeContext = React.createContext();

export default function Simplified() {
  return (
    <ThemeProvider>
      <SimplifiedComponent />
    </ThemeProvider>
  );
}
