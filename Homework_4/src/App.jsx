import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import TitleChanger from "./TitleChanger";
import AutoHideMessage from "./AutoHideMessage";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeClass = theme === "light" ? "light-theme" : "dark-theme";

  return (
    <div className={themeClass}>
      <ThemeSwitcher />
      <TitleChanger />
      <AutoHideMessage />
    </div>
  );
}

export default App;