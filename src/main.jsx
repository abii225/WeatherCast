import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataPack from "./ContextApi/DataPack.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataPack>
      <App />
    </DataPack>
  </React.StrictMode>
);
