import React, { useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeClass = theme === "light" ? "light-theme" : "dark-theme";

  return (
    <div className={themeClass}>
      <button onClick={toggleTheme}>Переключить тему</button>
      <p>{theme === "light" ? "Тема: Светлая" : "Тема: Темная"}</p>
    </div>
  );
}

export default ThemeSwitcher;