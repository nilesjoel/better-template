import React from "react";
import ReactDOM from "react-dom";
// import Typical from "./method_typical/App";
import Simplified from "./method_simplified/Simplified";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <Typical /> */}
    <Simplified />
  </React.StrictMode>,
  rootElement
);
