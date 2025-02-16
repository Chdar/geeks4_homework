import React, { useState, useEffect } from "react";

function TitleChanger({ theme }) {
  const titles = [
    "Привет, мир!",
    "React — крутой!",
    "Учусь хукам",
    "Измени заголовок!",
  ];

  const [title, setTitle] = useState(titles[0]);

  useEffect(() => {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    setTitle(randomTitle);
    document.title = randomTitle;
  }, [theme]);

  return null;
}

export default TitleChanger;