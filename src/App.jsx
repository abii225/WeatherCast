import React, { useContext, useEffect, useState } from "react";
import Screen from "./Components/Screen";
import { context } from "./ContextApi/DataPack";
import Footer from "./Components/Footer";

// import './App.css'

function App() {
  const { theme } = useContext(context);
  useEffect(() => {
    // console.log(theme);
  }, [theme]);
  const themeObj = {
    light: "darkblue",
    dark: "black",
  };
  return (
    <>
      <div style={{ backgroundColor: theme ? themeObj.light : themeObj.dark }}>
        <Screen />
        <Footer />
      </div>
    </>
  );
}

export default App;
