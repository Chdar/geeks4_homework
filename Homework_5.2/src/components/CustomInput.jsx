import React, { useRef, useState } from "react";
import Text from "./Text";

const CustomInput = () => {
  const inputRef = useRef(null); 
  const [value, setValue] = useState("");


  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setValue(""); // Очищаем input
    }
  };

  return (
    <div className="input-container">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Введите текст"
      />
      <button onClick={handleFocus}>Фокус</button>
      <Text text={value} />
    </div>
  );
};

export default CustomInput;